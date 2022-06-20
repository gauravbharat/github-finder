import PropTypes from "prop-types";
import UserItem from "./UserItem";
import { UserModel } from "../../models/users.model";
import { Spinner } from "../layout/spinner/Spinner";

const Users = ({ loading, users }) => {
  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserModel)),
  loading: PropTypes.bool,
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
