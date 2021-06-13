import React from 'react';

const Persons = ({ persons, filter, handleRemove }) => (
  <div>
    {persons.flatMap((person) =>
      !person.name.toLowerCase().includes(filter.toLowerCase()) ? (
        []
      ) : (
        <div key={person.name}>
          {person.name} {person.number}{' '}
          <button onClick={() => handleRemove(person)}>delete</button>
        </div>
      )
    )}
  </div>
);

export default Persons;
