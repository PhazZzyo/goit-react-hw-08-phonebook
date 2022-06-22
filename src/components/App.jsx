// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { getContacts, getFilter } from 'redux/contacts/contactsSelectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter value={filter} />
      <ContactList contacts={filteredContacts} />
    </>
  );
};
