import { Fragment } from "react";
import PropTypes from "prop-types";
import Search from "../users/Search";
import Users from "../users/Users";
import { UserModel } from "../../models/users.model";

const Home = (props) => {
  return (
    <Fragment>
      <Search
        clearUsers={props.clearUsers}
        showClear={props.users.length > 0}
        setAlert={props.setAlert}
      />
      <Users loading={props.loading} users={props.users} />
    </Fragment>
  );
};

Home.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape(UserModel)),
  loading: PropTypes.bool,
};

export default Home;
