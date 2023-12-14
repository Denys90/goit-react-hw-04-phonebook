import React from 'react';
import Input from '../Styled/Input.styled';

function Filter({ value, onChange }) {
  return (
    <Input
      type="text"
      placeholder="Search contacts"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}

export default Filter;
