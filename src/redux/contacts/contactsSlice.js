import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'Filter',
  initialState: '',
  reducers: {
    onChangeFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { onChangeFilter } = filterSlice.actions;
