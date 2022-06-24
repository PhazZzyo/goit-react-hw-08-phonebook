import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsActions';
import PropTypes from 'prop-types';
import style from './ContactListElement.module.css';

const ContactListElement = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={style.ContactList__item} key={id}>
      <span className={style.ContactList__text}>{name}: </span>
      <span className={style.ContactList__text}>{number}: </span>
      <button
        className={style.ContactList__button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListElement;
