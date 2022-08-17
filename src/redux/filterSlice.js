import { createSlice } from '@reduxjs/toolkit';

export const filterReducer = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilter: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setFilter } = filterReducer.actions;

export const getFilter = state => state.filter.value;
