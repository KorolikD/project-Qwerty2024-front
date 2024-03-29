import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDayInfo = createAsyncThunk(
  'getDayInfo',
  async (date, thunkAPI) => {
    try {
      const { data } = await axios.get(`/diary?date=${date}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'addProduct',
  async (productDate, thunkAPI) => {
    try {
      const { data } = await axios.post('/diary/product', productDate);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'deleteProduct',
  async (productDate, thunkAPI) => {
    const { id, date } = productDate;
    try {
      const { data } = await axios.delete(`/diary/product/${id}?date=${date}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteExercise = createAsyncThunk(
  'deleteExercise',
  async (exerciseDate, thunkAPI) => {
    const { id, date } = exerciseDate;
    try {
      const { data } = await axios.delete(`/diary/exercise/${id}?date=${date}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
