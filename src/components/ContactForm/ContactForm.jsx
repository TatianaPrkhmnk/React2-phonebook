import React from 'react';

const ContactForm = ({ name, onNameChange, onAddContact, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={onNameChange}
      />
      <button type="button" onClick={onAddContact}>Add Contact</button>
    </form>
  );
};

export default ContactForm;
