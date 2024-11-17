// src/redux/actions/productActions.js
import { fetchProducts as fetchProductsAPI } from '../../api/productAPI';

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

export const fetchProducts = () => async (dispatch) => {
  const products = await fetchProductsAPI();
  dispatch(setProducts(products));
};


