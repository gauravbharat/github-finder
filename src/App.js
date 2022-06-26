import React, { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/users/User";

import GithubState from "./context/github/GithubState";

const App = () => {
  const [alert, setAlertValue] = useState(null);

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
              <Route exact path="/" element={<Home setAlert={setAlert} />} />
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
    </GithubState>
  );
};

export default App;
