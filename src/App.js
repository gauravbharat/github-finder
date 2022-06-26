import React, { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/users/User";

import axios from "axios";

import GithubState from "./context/github/GithubState";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlertValue] = useState(null);

  const getUser = async (username) => {
    console.log("getUser", { username });

    setLoading(true);

    let response = null;

    try {
      response = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      console.log("getUser", { response });
      setUser(response?.data);
      setLoading(false);
    } catch (error) {
      console.log("getUser", { error });
      setUser(null);
      setLoading(false);
    }
  };

  const clearUsers = () => setUsers([]);

  const setAlert = (messageText, type) => {
    setAlertValue({ messageText, type });

    setTimeout(() => setAlertValue(null), 5000);
  };

  return (
    // Wrap App in GithubState provider for global state
    <GithubState>
      <BrowserRouter>
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
                    clearUsers={clearUsers}
                    showClear={users.length > 0}
                    setAlert={setAlert}
                    loading={loading}
                    users={users}
                  />
                }
              />
              <Route exact path="/about" element={<About />} />
              <Route
                path="/user/:loginId"
                element={
                  <User loading={loading} user={user} getUser={getUser} />
                }
              />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <h1>404: Page Not Found</h1>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </div>
        </Fragment>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
