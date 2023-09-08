import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import { Formik } from 'formik';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };


  handleFilterChange = (filter) => {
    this.setState({ filter });
  }

   handleAddContact = (contact) => {
    if (contact.name.trim() === '' || contact.number.trim() === '') {
      alert('Німа контактів');
      return;
    }

    const newContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };
  render() {
    const { filter, contacts } = this.state;

     const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange}/>
        <ContactList contacts={filteredContacts} onDeleteContact={this.handleDeleteContact}/>
      </div>
    )
  }
}

export default App;
