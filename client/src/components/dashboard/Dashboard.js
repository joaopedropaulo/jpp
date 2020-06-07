import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "../layout/Navbar";
import { connect } from "react-redux";

import { getCurrentProfile } from "../../actions/profile";
import DashboardActions from "./DashboardActions";

import Spinner from "../layout/Spinner";
import { Typography, Box } from "@material-ui/core";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  let dashboardHeader;
  if (loading && profile === null) {
    dashboardHeader = (
      <Fragment>
        <Spinner />
      </Fragment>
    );
  } else {
    dashboardHeader = (
      <Box mx={10} mt={5}>
        <Typography variant="h6"> Welcome, {user && user.name}!</Typography>
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
