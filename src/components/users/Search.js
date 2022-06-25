import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  const onChange = (e) => setSearchText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (searchText === "") {
      props.setAlert("Please enter something", "light");
    } else {
      props.searchUsers(searchText);
      setSearchText("");
    }
  };

  const { showClear, clearUsers } = props;

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={searchText}
          onChange={onChange}
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
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
