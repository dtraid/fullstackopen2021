import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Countries from './components/Countries';
import Search from './components/Search';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(
    () =>
      axios.get('https://restcountries.eu/rest/v2/all').then((res) => {
        setCountries(res.data);
      }),
    []
  );

  const handleSearchChange = (event) => setSearch(event.target.value);

  return (
    <div>
      find countries{' '}
      <Search search={search} handleSearchChange={handleSearchChange} />
      <Countries countries={countries} search={search} />
    </div>
  );
};

export default App;
