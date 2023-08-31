import React from 'react';
import styles from "./ContactForm.module.css";

const ContactForm = ({ name, number, onNameChange, onNumberChange, onAddContact, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.nameInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={onNameChange}
        placeholder="Name"
      />

      <input
        className={styles.nameInput}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={onNumberChange}
        placeholder="Number"
/>
      <button type="submit" className={styles.button} onClick={onAddContact}>Add Contact</button>
    </form>
  );
};

export default ContactForm;
