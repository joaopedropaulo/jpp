import React, { Fragment, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert";

import Login from "./components/auth/Login";

import Dashboard from "./components/dashboard/Dashboard";
import CreateUpdateProfile from "./components/profile/CreateUpdateProfile";
import EditExperience from "./components/profile/experience/EditExperience";
import EditEducation from "./components/profile/education/EditEducation";
import EditGenericSections from "./components/profile/generic-sections/EditGenericSections";

import PrivateRoute from "./components/routing/PrivateRoute";

import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import { ThemeProvider } from "@material-ui/core/styles";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import themes from "./styles/themes";

import "./App.css";

const generateClassName = createGenerateClassName({
  productionPrefix: "caligula",
});

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        <Provider store={store}>
          <Router>
            <Fragment>
              <Route exact path="/" component={Landing} />
              <Alert />
              <Switch>
                <Route exact path="/login" component={Login} />

                <Route exact path="/about" component={Landing} />

                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateUpdateProfile}
                />
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={CreateUpdateProfile}
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

                <PrivateRoute
                  exact
                  path="/edit-generic-sections"
                  component={EditGenericSections}
                />
              </Switch>
            </Fragment>
          </Router>
        </Provider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
