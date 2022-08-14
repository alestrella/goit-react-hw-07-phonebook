import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
  filter: '',
};

export const contactsReducer = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    filterItem: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  contactsReducer.reducer
);

export const { addContact, deleteContact, filterItem } =
  contactsReducer.actions;

// Selectors
export const getContacts = state => state.items;
export const getFilter = state => state.filter;
