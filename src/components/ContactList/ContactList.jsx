import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contactsSelectors';
import ContactListElement from './ContactListElement/ContactListElement';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  return (
    <ul className={style.ContactList__list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListElement key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
