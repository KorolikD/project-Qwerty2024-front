import axios from 'axios';

axios.defaults.baseURL = 'https://project-qwerty2024-back.onrender.com/api';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTdmNWMxMzVkMDMzNGExMWJmZDUwZiIsImlhdCI6MTcwOTg5NjIzMywiZXhwIjoxNzA5OTc5MDMzfQ.QiyfBp1CKgKL4YGk6H-if0EjJcGbq9Z8PaSQJqsiMMo';

export const exercisesLink = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default exercisesLink;
