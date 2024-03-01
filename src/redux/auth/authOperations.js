import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://project-qwerty2024-back.onrender.com/api/';

const setAuthHeaderToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const register = createAsyncThunk(
  'registerStatus',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('user/register', credentials);
      setAuthHeaderToken(res.data.token);
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);
