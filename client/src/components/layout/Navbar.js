import React, { Fragment } from "react";

import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core";
import { Button, Toolbar, Box, Grid, Typography } from "@material-ui/core";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import AnchorButton from "./AnchorButton";
import { logout } from "../../actions/auth";
//import useStyles from "../../styles/Styles";
import styles from "../../styles/Styles";

const useStyles = makeStyles((theme) => styles(theme));

//const useStyles = makeStyles((theme) => ({
//  // Navbar
//  navbarRoot: {
//    background: "transparent",
//    boxShadow: "none",
//  },
//  navbarHomeButtonText: {
//    fontFamily: "'Open Sans', serif",
//    fontWeight: "500",
//  },
//  navbarHomeButton: {
//    "&:hover": {
//      color: theme.palette.primary.light,
//    },
//  },
//  navbarHomeGrid: {
//    [theme.breakpoints.up("xs")]: {
//      padding: "1% 1%",
//    },
//  },
//  navbarActionsAuthenticated: {
//    [theme.breakpoints.up("xs")]: {
//      textAlign: "center",
//      display: "block",
//    },
//  },
//  navbarActions: {
//    [theme.breakpoints.up("xs")]: {
//      display: "none",
//    },
//    [theme.breakpoints.up("sm")]: {
//      textAlign: "center",
//      display: "block",
//    },
//  },
//  navbarGuestLinkButton: {
//    "&:hover": {
//      color: theme.palette.primary.light,
//    },
//  },
//  navbarAuthLinkButton: {
//    "&:hover": {
//      color: theme.palette.primary.light,
//    },
//  },
//}));

const Navbar = ({ auth: { isAuthenticated, loading }, logout, name }) => {
  const classes = useStyles();

  const authLinks = (
    <Box>
      <Button
        href={"/dashboard"}
        color="inherit"
        className={classes.navbarAuthLinkButton}
        startIcon={<PersonIcon />}
      >
        Dashboard
      </Button>
      <Button
        className={classes.navbarAuthLinkButton}
        onClick={logout}
        href={"/"}
        color="inherit"
        startIcon={<ExitToAppIcon />}
      >
        Logout
      </Button>
    </Box>
  );

  const guestLinks = (
    <Box>
      <AnchorButton
        href={"#about_me"}
        color="inherit"
        className={classes.navbarGuestLinkButton}
      >
        About me
      </AnchorButton>
      <AnchorButton
        href={"#resume"}
        color="inherit"
        className={classes.navbarGuestLinkButton}
      >
        Resume
      </AnchorButton>
      <AnchorButton
        href={"#contact_me"}
        color="inherit"
        className={classes.navbarGuestLinkButton}
      >
        Contact me
      </AnchorButton>
    </Box>
  );

  return (
    <AppBar
      position="static"
      className={!isAuthenticated ? classes.navbarRoot : ""}
    >
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} className={classes.navbarHomeGrid}>
            <Button
              href={"/"}
              color="inherit"
              className={classes.navbarHomeButton}
            >
              <Typography variant="h6" className={classes.navbarHomeButtonText}>
                {name}
              </Typography>
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            className={
              !isAuthenticated
                ? classes.navbarActions
                : classes.navbarActionsAuthenticated
            }
          >
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
