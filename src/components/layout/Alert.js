import PropTypes from "prop-types";

const Alert = ({ alert }) => {
  return (
    !!alert && (
      <div className={`alert alert-${alert.type}`}>
        <i class="fas fa-info-circle"></i> {alert.messageText}
      </div>
    )
  );
};

Alert.propTypes = {
  alert: PropTypes.shape({
    messageText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

export default Alert;
