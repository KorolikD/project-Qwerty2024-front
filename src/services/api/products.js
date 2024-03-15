import axios from 'axios';

export const fetchCategories = async () => {
  try {
    const response = await axios.get('/products/categories');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchProducts = async ({
  pageNumber,
  category,
  allowed,
  title,
}) => {
  try {
    const params = { pageNumber };

    params.allowed =
      allowed === true || allowed === false ? allowed : params.allowed;

    params.category = category !== '' ? category : params.category;

    params.title = title !== '' ? title : params.title;

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
