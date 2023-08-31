import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onNumberChange = (event) => {
    this.setState({ number: event.target.value });
  }

  handleAddContact = () => {
    const { name, number } = this.state;
     console.log('Проверка number:', number);

    if (name.trim() === '' || number.trim() === '') {
      alert('Німа контактів');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number
    };


    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  render() {
    const { name, number, contacts } = this.state;

    return (
      <div className="App">
        <h1>Phone Book</h1>
        <Formik
          initialValues={{ name: '' }}
          onSubmit={(values, actions) => {}}
        >
          {({ handleSubmit }) => (
            <ContactForm
              name={name}
              number={number}
              onNameChange={this.handleNameChange}
              onNumberChange={this.onNumberChange}
              onAddContact={this.handleAddContact}
              handleSubmit={handleSubmit}
            />
          )}
        </Formik>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
