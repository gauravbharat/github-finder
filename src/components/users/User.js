// import { useEffect } from "react";

import PropTypes from "prop-types";
import { Spinner } from "../layout/spinner/Spinner";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const User = ({ loading, user, getUser, repos, getUserRepos }) => {
  const params = useParams();

  console.log({
    params,
    user,
    loading,
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

  //   if (!props.user) {
  //     await props.getUser(username);
  //   }

  if (!!loading) return <Spinner />;

  return <div>User</div>;
};

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object,
  repos: PropTypes.array,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func,
};

export default User;
