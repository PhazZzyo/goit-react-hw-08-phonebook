import ContactListElement from './ContactListElement/ContactListElement';
import { useSelector } from 'react-redux/es/exports';
// import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  return (
    <ul className={style.ContactList__list}>
      {contacts.map(({ contact }) => (
        <ContactListElement key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };

export default ContactList;
