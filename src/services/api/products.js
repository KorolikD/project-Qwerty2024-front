import axios from 'axios';

export const fetchCategories = async () => {
  try {
    const response = await axios.get('/products/categories');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get('/products');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchBlood = async () => {
  try {
    const response = await axios.get('/users/current');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};