import axios from 'axios';

axios.defaults.baseURL = 'https://project-qwerty2024-back.onrender.com/api';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTdmNWMxMzVkMDMzNGExMWJmZDUwZiIsImlhdCI6MTcwOTk3NTQ4MSwiZXhwIjoxNzEwMDU4MjgxfQ.wF2thTn3bQUAtOBegAnpcxhCjs38FlTmRF_s0l9rgD8';

export const exercisesLink = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default exercisesLink;
