import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => personService.getAll().then((res) => setPersons(res)), []);

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    const duplicate = persons.find(
      (person) => person.name === personObject.name
    );

    if (duplicate) {
      updatePerson(duplicate, personObject);
    } else {
      personService.create(personObject).then((res) => {
        setPersons([...persons, res]);

        setNewName('');
        setNewNumber('');
      });
    }
  };

  const updatePerson = (person, changes) => {
    if (person.number === changes.number) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      personService.update(person, { ...changes }).then((res) => {
        setPersons(
          persons.map((person) => (person.id === res.id ? res : person))
        );
        setNewName('');
        setNewNumber('');
      });
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleSearchChange = (event) => setFilter(event.target.value);

  const handleRemove = (personToRemove) => {
    if (window.confirm(`Delete ${personToRemove.name}?`)) {
      personService
        .remove(personToRemove.id)
        .then((_) =>
          setPersons(
            persons.filter((person) => person.id !== personToRemove.id)
          )
        );
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleSearchChange={handleSearchChange} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} handleRemove={handleRemove} />
    </div>
  );
};

export default App;
