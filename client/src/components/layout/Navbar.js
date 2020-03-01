import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
//import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center"
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About me</Button>
        <Button color="inherit">CV</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
