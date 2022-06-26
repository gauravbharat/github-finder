import React, { useContext, useState } from "react";
import AlertContext from "../../context/alert/alertContext";

import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [searchText, setSearchText] = useState("");

  const onChange = (e) => setSearchText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (searchText === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(searchText);
      setSearchText("");
    }
  };

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
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
