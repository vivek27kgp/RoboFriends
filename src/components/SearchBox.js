import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <>
      <div className="pa2 tc">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="serch"
          placeholder="search robots"
          onChange={searchChange}
        />
      </div>
    </>
  );
};

export default SearchBox;
