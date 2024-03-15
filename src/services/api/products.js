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
    const params = { pageNumber, category, title };
    if (allowed === true || allowed === false) {
      params.allowed = allowed;
    }
    const response = await axios.get('/products', {
      params,
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
