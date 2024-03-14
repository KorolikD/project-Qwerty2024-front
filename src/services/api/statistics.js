import axios from 'axios';

export const getStatistics = async () => {
  try {
    const res = await axios(
      'https://project-qwerty2024-back.onrender.com/api/statistics'
    );
    return res.data;
  } catch {
    throw Error('Oops');
  }
};
