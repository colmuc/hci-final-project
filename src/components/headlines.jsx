import React, { Component } from "react";
import http from "../services/httpService";
import config from "../config.json";
class Headlines extends Component {
  state = { headlinesEvents: [], pageSize: 4, currentPage: 1, currentEvent: 1 };

  async componentDidMount() {
    const { data: headlinesEvents } = await http.get(config.headlinesEndPoint);
    console.log({ headlinesEvents });
  }
  render() {
    return <p>Headlines will be here</p>;
  }
}

export default Headlines;
