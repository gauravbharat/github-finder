import types from "../types";

const AlertReducer = (state, action) => {
  switch (action.type) {
    case types.SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };

    case types.REMOVE_ALERT:
      return {
        ...state,
        alert: null,
      };

    default:
      return state;
  }
};

export default AlertReducer;
