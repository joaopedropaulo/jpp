import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert as MuiAlert } from "@material-ui/lab";

const Alert = ({ alerts }) => {
  if (alerts !== null && alerts.length > 0) {
    let msg = [];
    alerts.forEach((alert) => {
      msg.push(
        <MuiAlert key={alert.id} severity={alert.alertType}>
          {alert.msg}
        </MuiAlert>
      );
    });
    return (
      <Snackbar open={true}>
        <div>{msg}</div>
      </Snackbar>
    );
  }
  return null;
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
