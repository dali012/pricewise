"use client";

import React from "react";

const SearchBar = () => {
  const handleSumbit = () => {};
  return (
    <form
      id="search-form"
      className="flex flex-wrap gap-4 mt-12"
      onSubmit={handleSumbit}
    >
      <input
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
      />
      <button type="submit" name="Search" className="searchbar-btn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
