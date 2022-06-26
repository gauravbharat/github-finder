import UserItem from "./UserItem";
import { Spinner } from "../layout/spinner/Spinner";

import GithubContext from "../../context/github/githubContext";
import { useContext } from "react";

const Users = () => {
  const githubContext = useContext(GithubContext);

  return githubContext.loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {githubContext.users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
