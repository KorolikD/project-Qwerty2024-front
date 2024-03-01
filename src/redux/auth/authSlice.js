import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOperations.js';

const initialState = {
  token: null,
  isAuth: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
  user: {
    name: null,
    email: null,
    avatarURL: null,
    height: null,
    currentWeight: null,
    desiredWeight: null,
    birthday: null,
    blood: null,
    sex: null,
    calorie: null,
    levelActivity: null,
    registerDate: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.token = action.payload.token;
      state.isAuth = true;
      state.isLoading = false;
      state.error = null;
      state.isRefreshing = false;
    });
  },
});

export default authSlice.reducer;
