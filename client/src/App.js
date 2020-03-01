import React, { Fragment } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Profile from "./components/layout/Profile";
import Login from "./components/auth/Login";

import "./App.css";

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Landing} />
      <Switch>
        <Route exact path="/login" component={Login} />

        <Route exact path="/profile" component={Profile} />

        <Route exact path="/about" component={Landing} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
