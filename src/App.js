import React, { Fragment, Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  searchUsers = async (searchText) => {
    console.log({ searchText });

    this.setState({ loading: true });

    let response = null;

    try {
      response = await axios.get(
        `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      console.log(response);
      this.setState({ users: response?.data?.items, loading: false });
    } catch (error) {
      console.log({ error });
      this.setState({ users: [], loading: false });
    }
  };

  clearUsers = () => this.setState({ users: [] });

  setAlert = (messageText, type) => {
    this.setState({ alert: { messageText, type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { loading, users, alert } = this.state;
    return (
      <Router>
        <Fragment>
          <Navbar title="Garyd's Github Finder" />
          <div className="container">
            <Alert alert={alert} />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0}
                    setAlert={this.setAlert}
                    loading={loading}
                    users={users}
                  />
                }
              />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
