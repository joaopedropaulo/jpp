import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";
import { getCurrentProfile } from "../../actions/profile";
import Navbar from "../layout/Navbar";
import DashboardActions from "./DashboardActions";
import Spinner from "../layout/Spinner";
import useStyles from "../../styles/Styles";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const classes = useStyles();

  let dashboardHeader;
  if (loading && profile === null) {
    dashboardHeader = (
      <Fragment>
        <Spinner />
      </Fragment>
    );
  } else {
    dashboardHeader = (
      <Box mx={10} mt={5} className={classes.dashboardHeaderContainer}>
        <Typography variant="h6">Welcome, {user && user.name}!</Typography>
      </Box>
    );
  }

  return (
    <div>
      <Navbar />
      {dashboardHeader}
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
        </Fragment>
      ) : (
        <Fragment>
          <Link to="/create-profile">Create Profile</Link>
        </Fragment>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
