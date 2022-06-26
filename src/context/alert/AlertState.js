import { useReducer } from "react";
import types from "../types";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (messageText, type) => {
    dispatch({ type: types.SET_ALERT, payload: { messageText, type } });

    setTimeout(() => dispatch({ type: types.REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
