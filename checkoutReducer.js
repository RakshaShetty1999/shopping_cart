import { SET_PAYMENT_METHOD } from '../actions/checkoutActions';

const initialState = {
  paymentMethod: 'CreditCard', // default method
  // other states like cart items, etc.
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
