import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  refreshUser,
  updateUser,
  updateAvatar,
  logOut,
} from './authOperations.js';

const initialState = {
  token: null,
  isAuth: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
  avatarURL: null,
  user: {
    name: null,
    email: null,
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
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuth = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLoading = false;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.avatarURL = action.payload.avatarURL;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateAvatar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {};
        state.token = null;
        state.isLoading = false;
        state.isAuth = false;
        state.error = null;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
