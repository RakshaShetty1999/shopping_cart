import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};