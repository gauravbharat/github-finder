import PropTypes from "prop-types";
import UserItem from "./UserItem";
import { UserModel } from "../../models/users.model";

const Users = ({ loading, users }) => {
  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.exact(UserModel)),
  loading: PropTypes.bool,
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
