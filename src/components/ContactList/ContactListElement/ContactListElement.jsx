import { useDeleteContactMutation } from 'services/contactsAPI';
// import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import style from './ContactListElement.module.css';

const ContactListElement = ({ id, name, number }) => {
  // const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [deleteContact] = useDeleteContactMutation();
  return (
    <>
      {/* {isLoading} && <Loader color={'#3f51b5'} size={32} /> */}
      <li className={style.ContactList__item} key={id}>
        <span className={style.ContactList__text}>
          {name}: {number}
        </span>
        <button
          className={style.ContactList__button}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListElement;
