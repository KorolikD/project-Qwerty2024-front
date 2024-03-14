import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-qwerty2024-back.onrender.com/api/';

const setAuthHeaderToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'registerStatus',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('users/register', credentials);
      setAuthHeaderToken(res.data.token);
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const logIn = createAsyncThunk(
  'loginStatus',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('users/login', credentials);
      setAuthHeaderToken(res.data.token);
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const logOut = createAsyncThunk(
  'logoutStatus',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('users/logout');
      clearAuthHeader();
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'refreshStatus',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    try {
      setAuthHeaderToken(persistToken);
      const res = await axios.get('users/current');
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
export const updateUser = createAsyncThunk(
  'updateStatus',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.patch('users/params', credentials);
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'updateAvatarStatus',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.patch('users/avatar', credentials, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);
