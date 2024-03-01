import axios from 'axios';
export const getDayInfo = async (day) => {
  const response = await axios.get(`/diary/day?date=${day}`);
  return response.data;
};

export const deleteProduct = async ({ id, date }) => {
  await axios.delete(`/diary/product/${id}?date=${date}`);
};

export const deleteExercise = async ({ id, date }) => {
  await axios.delete(`/diary/exercise/${id}?date=${date}`);
};
