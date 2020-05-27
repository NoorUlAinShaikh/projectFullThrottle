import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import UsersList from "./UsersList";
import UserActivity from "./UserActivity";
import history from "../history";

const App = () => {
  return (
    <div className="ui container" style={{ minWidth: "400px" }}>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/users" component={UsersList} />
            <Route path="/users/activity/:id" component={UserActivity} />
            <Route component={Landing} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
