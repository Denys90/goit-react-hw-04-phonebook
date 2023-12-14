import React from 'react';
import FormS from '../Styled/FormS.styled';

function Form({ name, number, onChange, onSubmit }) {
  return (
    <FormS onSubmit={onSubmit}>
      <label htmlFor="Name">
        Name
        <input
          type="text"
          name="name"
          id="Name"
          value={name}
          onChange={onChange}
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={onChange}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </FormS>
  );
}

export default Form;
