import React, { useState, useEffect } from 'react';
import personService from './services/persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationType, setNotificationType] = useState();

  const removePersonFromPersons = (id) =>
    setPersons(persons.filter((person) => id !== person._id));

  useEffect(() => personService.getAll().then((res) => setPersons(res)), []);

  const showNotification = (message, type) => {
    setNotificationMessage(message);
    setNotificationType(type);
    setTimeout(() => setNotificationMessage(null), 5000);
  };

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
        showNotification(`Added ${res.name} to phonebook`, 'success');
        setPersons([...persons, res]);
        setNewName('');
        setNewNumber('');
      });
    }
  };

  const updatePerson = (person, changes) => {
    if (person.number === changes.number) {
      showNotification(`${newName} is already added to phonebook`, 'error');
    } else {
      personService.update(person, { ...changes }).then((res) => {
        setPersons(
          persons.map((person) => (person._id === res._id ? res : person))
        );

        showNotification(
          `Updated ${res.name} with phone number ${res.number}`,
          'success'
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
    const { _id, name } = personToRemove;

    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(_id)
        .then((_) => {
          showNotification(`Removed ${name} from phonebook`, 'success');

          removePersonFromPersons(_id);
        })
        .catch((_error) => {
          showNotification(
            `Information of ${name} has already been removed from server`,
            'error'
          );

          removePersonFromPersons(_id);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} type={notificationType} />
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
