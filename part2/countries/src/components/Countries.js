import React from 'react';
import CountryInfo from './CountryInfo';

const Countries = ({ countries, search }) => {
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredCountries.length === 0)
    return <div>No matches, specify another filter</div>;
  if (filteredCountries.length === 1)
    return <CountryInfo country={filteredCountries[0]} />;
  if (filteredCountries.length > 10)
    return <div>Too many matches, specify another filter</div>;

  return (
    <div>
      {filteredCountries.map((country) => (
        <div key={country.name}>{country.name}</div>
      ))}
    </div>
  );
};

export default Countries;
