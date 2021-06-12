import React from 'react';

const Persons = ({ persons, filter }) => (
  <div>
    {persons.flatMap((person) =>
      !person.name.toLowerCase().includes(filter.toLowerCase()) ? (
        []
      ) : (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      )
    )}
  </div>
);

export default Persons;
