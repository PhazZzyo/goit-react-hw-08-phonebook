import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'services/contactsAPI';
import { filterSlice } from './contacts/contactsSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: { [contactsApi.reducerPath]: contactsApi.reducer },
  filterSlice: filterSlice.reducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  logger,
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);
