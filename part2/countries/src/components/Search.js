import React from 'react';

const Search = ({ search, handleSearchChange }) => (
  <input value={search} onChange={handleSearchChange} />
);

export default Search;
