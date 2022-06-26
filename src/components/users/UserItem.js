import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";
import { UserModel } from "../../models/users.model";

// destructure state to directly use the prop names within
const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt={login}
        className="round-img"
        style={{ width: "60px" }}
      />

      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape(UserModel).isRequired,
};

export default UserItem;
