import React, { Fragment, Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    let response = null;

    try {
      response = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
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

export default App;
