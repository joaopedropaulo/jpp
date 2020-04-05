import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import Navbar from "../layout/Navbar";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";

import Spinner from "../layout/Spinner";
import { Typography } from "@material-ui/core";

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
      <Fragment>
        <Typography variant="h3">Profile Dashboard</Typography>
        <Typography variant="h4"> Welcome {user && user.name}</Typography>
      </Fragment>
    );
  }

  return (
    <div>
      <Navbar />
      {dashboardHeader}
      {profile !== null ? (
        <Fragment>has</Fragment>
      ) : (
        <Fragment>has not</Fragment>
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
