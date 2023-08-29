import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = (event) => {
    // const { name, value } = event.target;
    this.setState({ name: event.target.value });
  };


  handleAddContact = () => {
    // event.preventDefault();

    const { name } = this.state;

    if (name.trim() === '') {
      alert('Німа контактів');
      return;
    }

    const newContact = {
      id: nanoid(),
      name
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
    }));
  };

  render() {
    const { name, contacts } = this.state;

    return (
      <div className="App">
        <h1>Phone Book</h1>
        <Formik
          initialValues={{ name: '' }}
          onSubmit={() => {}}
        >
          {({ handleSubmit }) => (
            <ContactForm
              name={name}
              onNameChange={this.handleNameChange}
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
