import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { login } from "../../actions/auth";

import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { Face, Fingerprint } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  padding: {
    padding: theme.spacing(1)
  },
  icons: {
    alignSelf: "flex-end"
  }
}));

const Login = ({ login, isAuthenticated }) => {
  const classes = useStyles();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <form onSubmit={onSubmit}>
            <Paper className={classes.paper}>
              <Grid container spacing={12} className={classes.padding}>
                <Grid item xs className={classes.icons}>
                  <Face />
                </Grid>
                <Grid item xs={11}>
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    autoFocus
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
              <Grid container spacing={12} className={classes.padding}>
                <Grid item xs className={classes.icons}>
                  <Fingerprint />
                </Grid>
                <Grid item xs={11}>
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="primary"
                style={{ textTransform: "none", marginTop: "24px" }}
                type="submit"
              >
                Login
              </Button>
            </Paper>
          </form>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
      <Grid container justify="center" style={{ marginTop: "10px" }}></Grid>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAutenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
