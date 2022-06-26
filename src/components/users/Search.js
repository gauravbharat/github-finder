import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import GithubContext from "../../context/github/githubContext";

const Search = (props) => {
  const githubContext = useContext(GithubContext);

  const [searchText, setSearchText] = useState("");

  const onChange = (e) => setSearchText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (searchText === "") {
      props.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(searchText);
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
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
