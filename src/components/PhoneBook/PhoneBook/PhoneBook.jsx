import { useState, useEffect } from 'react';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContsctList';
import Container from '../Styled/Container.styled';
import Title from '../Styled/Title.styled';
import MiniTitle from '../Styled/MiniTitle.styled';
import { nanoid } from 'nanoid';
//=============================================================>
export function PhoneBook() {
  const [contacts, setContacts] = useState(() => {
    return (JSON.parse(localStorage.getItem('contacts')));
  });
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [showDeleted] = useState(false);
  //=============================================================>
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  //=============================================================>
  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  }
  //=============================================================>
  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prevState => [...prevState, newContact]);
    setName('');
    setNumber('');
  };
  //=============================================================>
  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  //=============================================================>
  const filterValue = value => {
    setFilter(value);
  };
  //=============================================================>
  const filteredContacts = showDeleted
    ? contacts
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  //=============================================================>
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form
        name={name}
        number={number}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <MiniTitle>Contacts</MiniTitle>
      <Filter value={filter} onChange={filterValue} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </Container>
  );
}
