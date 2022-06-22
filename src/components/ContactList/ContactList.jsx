import ContactListElement from './ContactListElement/ContactListElement';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={style.ContactList__list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListElement key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
