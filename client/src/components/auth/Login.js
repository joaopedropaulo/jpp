import React from "react";

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
    padding: theme.spacing.unit
  },
  icons: {
    alignSelf: "flex-end"
  }
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={12} className={classes.padding}>
              <Grid item xs className={classes.icons}>
                <Face />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  id="username"
                  label="Username"
                  type="email"
                  fullWidth
                  autoFocus
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
                  id="username"
                  label="Password"
                  type="password"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              style={{ textTransform: "none", marginTop: "24px" }}
            >
              Login
            </Button>
          </Paper>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
      <Grid container justify="center" style={{ marginTop: "10px" }}></Grid>
    </div>
  );
};

export default Login;
