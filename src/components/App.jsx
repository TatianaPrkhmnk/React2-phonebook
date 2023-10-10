import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  // загружаем контакты из локального хранилища
  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  // сохранение контактов в локал, если они изменились
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const handleAddContact = (contact) => {
    if (contact.name.trim() === '' || contact.number.trim() === '') {
      alert('Німа контактів');
      return;
    }

    const newContact = {
      id: nanoid(),
      ...contact,
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;
