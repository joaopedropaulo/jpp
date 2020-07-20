import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
//import Typography from "@material-ui/core/Typography";
import {
  Button,
  Toolbar,
  Box,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import AnchorButton from "./AnchorButton";
import { logout } from "../../actions/auth";
import useStyles from "../../styles/Styles";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const classes = useStyles();

  const authLinks = (
    <Box>
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
    </Box>
  );

  const guestLinks = (
    <Box>
      <AnchorButton href={"#about_me"} color="inherit">
        About me
      </AnchorButton>
      <AnchorButton href={"#resume"} color="inherit">
        Resume
      </AnchorButton>
      <AnchorButton href={"#contact_me"} color="inherit">
        Contact me
      </AnchorButton>
    </Box>
  );

  return (
    <AppBar
      position="static"
      className={!isAuthenticated ? classes.navbarRoot : {}}
    >
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={6} className={classes.navbarHomeGrid}>
            <Button
              href={"/"}
              color="inherit"
              className={classes.navbarHomeButton}
            >
              <Typography variant="h6" className={classes.navbarHomeButtonText}>
                João Paulo
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={6} className={classes.navbarActions}>
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </Grid>
        </Grid>
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
