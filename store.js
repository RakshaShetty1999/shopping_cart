// src/redux/store.js
import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  auth: authReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
