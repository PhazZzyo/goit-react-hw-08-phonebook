import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contactsSelectors';
import { useGetContactsQuery } from 'services/contactsAPI';
import ContactListElement from './ContactListElement/ContactListElement';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = () => {
  // const filter = useSelector(getFilter);
  const filter = useSelector(state => state.filter);
  const {
    data: filteredContacts,
    isFetching,
    isError,
  } = useGetContactsQuery(filter);
  console.log(filter);
  return (
    <>
      {isFetching && <Loader color={'#3f51b5'} size={32} />}
      {isError && console.log(isError)}
      {filteredContacts ? (
        <ul className={style.ContactList__list}>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactListElement key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      ) : (
        <h3>Your phonebook is empty</h3>
      )}
    </>
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
