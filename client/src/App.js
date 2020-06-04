import React, { Fragment, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Profile from "./components/layout/Profile";
import Alert from "./components/layout/Alert";

import Login from "./components/auth/Login";

import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile/CreateProfile";
import EditProfile from "./components/profile/EditProfile";
import EditExperience from "./components/profile/experience/EditExperience";
import EditEducation from "./components/profile/education/EditEducation";

import PrivateRoute from "./components/routing/PrivateRoute";

import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import themes from "./styles/themes";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <Provider store={store}>
        <Router>
          <Fragment>
            <Route exact path="/" component={Landing} />
            <Alert />
            <Switch>
              <Route exact path="/login" component={Login} />

              <Route exact path="/profile" component={Profile} />

              <Route exact path="/about" component={Landing} />

              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path="/edit-experience"
                component={EditExperience}
              />
              <PrivateRoute
                exact
                path="/edit-education"
                component={EditEducation}
              />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
