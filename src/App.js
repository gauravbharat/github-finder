import React, { Fragment, Component } from "react";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";

class App extends Component {
  foo = () => "Bars";

  render() {
    // const name = "Gaurav Mendse";
    // let loading = true;

    return (
      <Fragment>
        {/* {loading ? <h4>Loading...</h4> : ""}
        <h1>Hello {name.toUpperCase()}</h1>
        <h2>{this.foo()}</h2> */}
        <Navbar title="Garyd's Github Finder" />
      </Fragment>
    );
  }
}

export default App;
