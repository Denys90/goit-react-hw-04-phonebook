import { Component } from 'react';

import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContsctList';
import Container from '../Styled/Container.styled';
import Title from '../Styled/Title.styled';
import MiniTitle from '../Styled/MiniTitle.styled';
import { nanoid } from 'nanoid';

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
    showDeleted: false,
  };

  // Викликається відразу після монтування компонента в DOM
  componentDidMount() {
    const contact = localStorage.getItem('contact');
    const contactParsed = JSON.parse(contact);

    if (contactParsed) {
      this.setState({ contacts: contactParsed });
    }
  }

  // Викликається відразу після оновлення компонента в DOM
  // Не викликається при початковому рендері компонента
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, contacts } = this.state;
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
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filter = value => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter, showDeleted, name, number } = this.state;
    const filteredContacts = showDeleted
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );

    return (
      <Container>
        <Title>Phonebook</Title>
        <Form
          name={name}
          number={number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <MiniTitle>Contacts</MiniTitle>
        <Filter value={filter} onChange={this.filter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default Phonebook;
