import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const shoppingListThunk = createAsyncThunk(
  '/recipes/shopping-list',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;

    try {
      setAuthHeader(token);
      const res = await axios.get('/shopping-list');

      return res.data;
    } catch (err) {
      if (err) {
        Notify.failure('Shopping-list not found!');
        return rejectWithValue(err.message);
      }
    }
  }
);

export const shoppingListRemoveItemThunk = createAsyncThunk(
  '/recipes/shopping-list/',

  async (id, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;

    try {
      setAuthHeader(token);
      const res = await axios.delete(`/shopping-list/${id}`);

      await new Promise(resolve => setTimeout(resolve, 1000));

      return { res, id };
    } catch (err) {
      if (err) {
        Notify.failure('Cant remove shopping-list item!');
        return rejectWithValue(err.message);
      }
    }
  }
);
