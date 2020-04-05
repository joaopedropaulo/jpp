import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
//import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
  },
}));

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const classes = useStyles();

  const authLinks = (
    <div>
      <Button href={"/dashboard"} color="inherit" startIcon={<PersonIcon />}>
        Dashboard
      </Button>
      <Button
        onClick={logout}
        href={"#!"}
        color="inherit"
        startIcon={<ExitToAppIcon />}
      >
        Logout
      </Button>
    </div>
  );

  const guestLinks = (
    <div>
      <Button href={"/about"} color="inherit">
        About me
      </Button>
      <Button href={"/profile"} color="inherit">
        Profile
      </Button>
    </div>
  );

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Button href={"/"} color="inherit">
          Home
        </Button>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
