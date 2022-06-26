import { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/Users";

const Home = (props) => {
  return (
    <Fragment>
      <Search setAlert={props.setAlert} />
      <Users />
    </Fragment>
  );
};

export default Home;
