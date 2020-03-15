import React, { Fragment, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Profile from "./components/layout/Profile";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";

import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Landing} />
          <Alert />
          <Switch>
            <Route exact path="/login" component={Login} />

            <Route exact path="/profile" component={Profile} />

            <Route exact path="/about" component={Landing} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
