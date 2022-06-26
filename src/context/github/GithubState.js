// Should contain initial state and actions

import { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import types from "../types";

import axios from "axios";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: null,
    loading: false,
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (searchText) => {
    console.log("searchUsers", { searchText });

    setLoading();

    let response = null;

    try {
      response = await axios.get(
        `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      console.log("searchUsers", { response });
      dispatch({ type: types.SEARCH_USERS, payload: response?.data?.items });
    } catch (error) {
      console.log("searchUsers", { error });
      dispatch({ type: types.SEARCH_USERS, payload: [] });
    }
  };

  // Get User

  // Get Repos

  // Clear Users

  // Set Loading
  const setLoading = () => dispatch({ type: types.SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
