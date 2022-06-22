import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/contactsActions';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.FilterContainer}>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className={style.FilterInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Find contacts by name"
          placeholder="Enter search request here"
          value={value}
          onChange={event => dispatch(filterContact(event))}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Filter;
