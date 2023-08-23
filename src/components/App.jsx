// App.js
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name } = this.state;

    if (name.trim() === '') {
      alert('Німа контактів');
      return;
    }

    const contact = { id: nanoid(), name };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
      name: '',
    }));
  };

  render() {
    const { name, contacts } = this.state;

    return (
      <div>
        <Form name={name} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
