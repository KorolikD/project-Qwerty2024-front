export const selectDiaryProducts = (state) => state.diary.productsList;

export const selectDiaryExercises = (state) => state.diary.exercisesList;

export const selectTotalCalories = (state) => state.diary.totalCalories;

export const selectBurnedCalories = (state) => state.diary.burnedCalories;

export const selectTimeSpentOnExercises = (state) =>
  state.diary.timeSpentOnExercises;

export const selectIsLoading = (state) => state.diary.isLoading;

export const selectError = (state) => state.diary.error;
