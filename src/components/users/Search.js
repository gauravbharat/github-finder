import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    searchText: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  onChange = (e) =>
    this.setState({
      searchText: e.target.value,
    });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.searchText);
    this.setState({ searchText: "" });
  };

  render() {
    const { showClear, clearUsers } = this.props;

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
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
