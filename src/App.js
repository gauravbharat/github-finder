import React, { Fragment, Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { Users } from "./components/users/Users";

class App extends Component {
  foo = () => "Bars";

  render() {
    return (
      <Fragment>
        <Navbar title="Garyd's Github Finder" />
        <div className="container">
          <Users />
        </div>
      </Fragment>
    );
  }
}

export default App;
