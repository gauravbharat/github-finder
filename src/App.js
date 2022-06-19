import React, { Fragment, Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import PropTypes from "prop-types";

import axios from "axios";
import { UserModel } from "./models/users.model";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    let response = null;

    try {
      response = await axios.get(`https://api.github.com/users`);
      console.log(response?.data);
      this.setState({ users: response?.data, loading: false });
    } catch (error) {
      console.log({ error });
      this.setState({ users: [], loading: false });
    }
  }

  render() {
    const { loading, users } = this.state;
    return (
      <Fragment>
        <Navbar title="Garyd's Github Finder" />
        <div className="container">
          <Users loading={loading} users={users} />
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  user: PropTypes.arrayOf(UserModel),
  loading: PropTypes.bool,
};

export default App;
