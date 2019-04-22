import React, { Component } from "react";
import http from "../services/httpService";
import config from "../config.json";
import Pagination from "./../common/pagination";
import { paginate } from "../utils/paginate";

class Headlines extends Component {
  state = { articles: [], pageSize: 6, currentPage: 1, currentEvent: 1 };

  async componentDidMount() {
    const { data: headlinesEvents } = await http.get(config.headlinesEndPoint);
    const articles = headlinesEvents.articles;
    console.log({ articles });
    this.setState({ articles });
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  onSeeMoreClick = article => {
    window.open(
      article.url,
      "win2",
      "status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=700,height=500,directories=no,location=no"
    );
  };

  styles = {
    width: 200,
    height: 100
  };
  render() {
    const { currentPage, pageSize, articles: allArticles } = this.state;
    const { length: count } = this.state.articles;

    const articles = paginate(allArticles, currentPage, pageSize);
    return (
      <div className="align-middle">
        <div className="">
          <table className="table table-hover container">
            <thead>
              <tr>
                <th>Headlines</th>
                <th>Author</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {articles.map(article => (
                <tr key={article.title}>
                  <td>
                    <img
                      src={article.urlToImage}
                      style={this.styles}
                      className="img-thumbnail img-fluid"
                    />
                  </td>
                  <td>{article.author}</td>

                  <td>{article.title}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={this.onSeeMoreClick.bind(article, article)}
                    >
                      View More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Headlines;
