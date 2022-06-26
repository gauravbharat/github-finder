// Should contain initial state and actions

import { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: null,
    loading: false,
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users

  // Get User

  // Get Repos

  // Clear Users

  // Set Loading

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
