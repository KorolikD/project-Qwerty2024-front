import axios from 'axios';

axios.defaults.baseURL = 'https://project-qwerty2024-back.onrender.com/api';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTg5NjE0ZWNiZmQyNjhhZTYzNjVhMiIsImlhdCI6MTcwOTc0MTk1OCwiZXhwIjoxNzA5ODI0NzU4fQ.yET0K9XukIqVMBpchxniEPMaxES7ZsPhtuyU9RP5RnY';

export const fetchCategories = async () => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      '/products/categories',
      config
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchProducts = async () => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      '/products',
      config
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchBlood = async () => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      '/users/current',
      config
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};