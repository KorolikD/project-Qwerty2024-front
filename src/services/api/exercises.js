import axios from 'axios';

axios.defaults.baseURL = 'https://project-qwerty2024-back.onrender.com/api';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTdmNWMxMzVkMDMzNGExMWJmZDUwZiIsImlhdCI6MTcwOTg2NDk5NiwiZXhwIjoxNzA5OTQ3Nzk2fQ.gkXizanD6dvdudR1dkMsMCaZKXE8w_yJJBc2NYcvrgo';

export const exercisesLink = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default exercisesLink;
