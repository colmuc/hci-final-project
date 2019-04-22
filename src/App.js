import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import BusinessNews from "./components/businessNews";
import Headlines from "./components/headlines";
import ScienceNews from "./components/scienceNews";
import SportsNews from "./components/sportsNews";
import NavBar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          {" "}
          <NavBar />{" "}
          <Switch>
            <Route path="/headlines" component={Headlines} />
            <Route path="/business" component={BusinessNews} />
            <Route path="/science" component={ScienceNews} />
            <Route path="/sports" component={SportsNews} />
            <Redirect path="/" exact to="/headlines" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
