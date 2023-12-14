import React from 'react';
import List from '../Styled/List.srtled';
import { MdDeleteForever } from 'react-icons/md';

function ContactList({ contacts, deleteContact }) {
  return (
    <List>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => deleteContact(contact.id)}>
            <MdDeleteForever />
          </button>
        </li>
      ))}
    </List>
  );
}

export default ContactList;
