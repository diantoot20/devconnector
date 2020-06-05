import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// instead of using props we deconstructed it to alerts to be readable
// Checked to see that the props.alerts is not empty
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    //   This is where we style the alert
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
