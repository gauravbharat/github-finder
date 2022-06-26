import { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alert = useContext(AlertContext)?.alert;

  return (
    !!alert && (
      <div className={`alert alert-${alert?.type}`}>
        <i className="fas fa-info-circle"></i> {alert?.messageText}
      </div>
    )
  );
};

export default Alert;
