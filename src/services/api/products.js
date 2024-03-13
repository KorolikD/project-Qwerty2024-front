import axios from 'axios';

export const fetchCategories = async () => {
  try {
    const response = await axios.get('/products/categories');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchProducts = async (pageNumber, category, allowed, title) => {
  try {
    const response = await axios.get('/products', {
      params: { pageNumber, category, allowed, title },
    });
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
