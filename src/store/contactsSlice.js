import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      console.log(state);
      console.log(action);

      state.contacts.items.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    onChangeFilter(state, action) {},
    removeContact(state, action) {},
  },
});

export const { addContact, onChangeFilter, removeContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;
