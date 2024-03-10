import { createSlice } from '@reduxjs/toolkit';
import { getDayInfo, deleteProduct, deleteExercise } from './operations';

const diaryInitialstate = {
  productsList: null,
  exercisesList: null,
  totalCalories: 0,
  burnedCalories: 0,
  timeSpentOnExercises: 0,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleGetDayInfoRejected = (state) => {
  state.isLoading = false;
  state.exercisesList = [];
  state.productsList = [];
};

const handleGetDayInfoSuccess = (state, { payload }) => {
  state.isLoading = false;
  if (!payload.userProductsDiary && !payload.userExercisesDiary) {
    state.productsList = null;
    state.exercisesList = null;
    state.burnedCalories = 0;
    state.timeSpentOnExercises = 0;
    state.totalCalories = 0;
  }
  if (payload.userProductsDiary && !payload.userExercisesDiary) {
    state.productsList = payload.userProductsDiary.products;
    state.totalCalories = payload.userProductsDiary.totalCalories;
    state.exercisesList = null;
    state.burnedCalories = 0;
    state.timeSpentOnExercises = 0;
  }
  if (payload.userExercisesDiary && !payload.userProductsDiary) {
    state.exercisesList = payload.userExercisesDiary.exercises;
    state.burnedCalories = payload.userExercisesDiary.burnedCalories;
    state.timeSpentOnExercises = payload.userExercisesDiary.totalTime;
    state.productsList = null;
    state.totalCalories = 0;
  }
  if (payload.userProductsDiary && payload.userExercisesDiary) {
    state.productsList = payload.userProductsDiary.products;
    state.totalCalories = payload.userProductsDiary.totalCalories;
    state.burnedCalories = payload.userExercisesDiary.burnedCalories;
    state.exercisesList = payload.userExercisesDiary.exercises;
    state.timeSpentOnExercises = payload.userExercisesDiary.totalTime;
  }
};

const handleDeleteProductSuccess = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.productsList = state.productsList.filter(
    (product) => product._id !== payload
  );
};

const handleDeleteExerciseSuccess = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.exercisesList = state.exercisesList.filter(
    (exercise) => exercise._id !== payload
  );
};

const diary = createSlice({
  name: 'diary',
  initialState: diaryInitialstate,
  extraReducers: (builder) => {
    builder.addCase(getDayInfo.pending, handlePending);
    builder.addCase(deleteProduct.pending, handlePending);
    builder.addCase(deleteExercise.pending, handlePending);

    builder.addCase(getDayInfo.rejected, handleGetDayInfoRejected);
    builder.addCase(deleteProduct.rejected, handleRejected);
    builder.addCase(deleteExercise.rejected, handleRejected);

    builder.addCase(getDayInfo.fulfilled, handleGetDayInfoSuccess);
    builder.addCase(deleteProduct.fulfilled, handleDeleteProductSuccess);
    builder.addCase(deleteExercise.fulfilled, handleDeleteExerciseSuccess);
  },
});

export const diaryReducer = diary.reducer;
