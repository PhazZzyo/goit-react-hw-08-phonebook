import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'services/contactsAPI';
import contactsReducer from '../redux/contacts/contactsReducers';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: { contactsReducer, [contactsApi.reducerPath]: contactsApi.reducer },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  logger,
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);
