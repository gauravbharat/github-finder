import React, { Component } from "react";

class Search extends Component {
  state = {
    searchText: "",
  };

  onChange = (e) =>
    this.setState({
      searchText: e.target.value,
    });

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchText);
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.searchText}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
