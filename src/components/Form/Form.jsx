import React from "react";

const Form = ({ name, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
    <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChange}
        />
        </label>
      </form>
  )
}

export default Form;