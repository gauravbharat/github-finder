// import { useEffect } from "react";

import PropTypes from "prop-types";
import { Spinner } from "../layout/spinner/Spinner";
import { useParams } from "react-router-dom";

const User = ({ loading, user, getUser, repos, getUserRepos }) => {
  const params = useParams();

  console.log({
    params,
  });

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
