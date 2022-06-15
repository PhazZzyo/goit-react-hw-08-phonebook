import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import initialContacts from './contacts.json';
import { addContact } from 'store/contactsSlice';

const INITIAL_STATE = {
  contacts: initialContacts,
  filter: '',
};

export const App = () => {
  const localContacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(localContacts);
  const [filter, setFilter] = useState(INITIAL_STATE.filter);
  const [contacts, setContacts] = useState(
    () => parsedContacts ?? INITIAL_STATE.contacts
  );
  const [contact, setContact] = useState('');
  const dispatch = useDispatch;

  const newContact = () => dispatch(addContact({ contact }));

  const fake = () => {
    setContact(fake);
  };
  console.log(fake);

  // const addContact = data => {
  //   const { name, number } = data;
  //   if (contacts.find(contact => contact.name === name)) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   setContacts([newContact, ...contacts]);
  // };

  const removeContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook app</h1>
      <h2>New Contact</h2>
      <ContactForm handleSubmit={newContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList contacts={filteredContacts} onDelete={removeContact} />
    </>
  );
};
