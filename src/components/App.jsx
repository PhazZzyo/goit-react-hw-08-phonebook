import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import {
  getFilter,
  getFilteredContacts,
} from 'redux/contacts/contactsSelectors';

export const App = () => {
  const filter = useSelector(getFilter);
  const filteredContacts = useSelector(getFilteredContacts);

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
