// import { useEffect } from "react";

import { Spinner } from "../layout/spinner/Spinner";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

import GithubContext from "../../context/github/githubContext";

const User = () => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user } = githubContext;
  const params = useParams();

  console.log("User", {
    params,
  });

  /** The Effect Hook lets you perform side effects in function components
   * Similar to componentDidMount and componentDidUpdate
   * Since useEffect can go in endless loop after updating the component, pass on empty array to run it once
   * It would give a warning to pass missing dependencies BUT it would cause useEffect to reload again in endless loop, disable eslint in that case for next line
   */
  useEffect(() => {
    getUser(params.loginId);
    //eslint-disable-next-line
  }, []);

  if (!!loading) return <Spinner />;

  return <div>User {user?.name}</div>;
};

export default User;
