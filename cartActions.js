// // src/redux/actions/cartActions.js
// export const addToCart = (product) => ({
//     type: 'ADD_TO_CART',
//     payload: product,
//   });
  
//   export const removeFromCart = (productId) => ({
//     type: 'REMOVE_FROM_CART',
//     payload: productId,
//   });




// src/redux/actions/cartActions.js
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const incrementQuantity = (productId) => ({
  type: 'INCREMENT_QUANTITY',
  payload: productId,
});

export const decrementQuantity = (productId) => ({
  type: 'DECREMENT_QUANTITY',
  payload: productId,
});

export const removeFromCart = (productId) => ({
  type: 'REMOVE_FROM_CART',
  payload: productId,
});


