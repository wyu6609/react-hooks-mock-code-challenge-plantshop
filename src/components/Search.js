import React from "react";

function Search({ setSearchInputText }) {
  const searchBarHandler = (event) => {
    setSearchInputText(event.target.value);
  };
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={searchBarHandler}
      />
    </div>
  );
}

export default Search;
