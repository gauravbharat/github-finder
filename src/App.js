import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/users/User";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    // Wrap App in GithubState provider for global state
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Fragment>
            <Navbar title="Garyd's Github Finder" />
            <div className="container">
              <Alert />

              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route path="/user/:loginId" element={<User />} />
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
      </AlertState>
    </GithubState>
  );
};

export default App;
