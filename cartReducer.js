// const initialState = {
//     items: [],
//     totalAmount: 0,
//   };
  
//   const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         return {
//           ...state,
//           items: [...state.items, action.payload],
//           totalAmount: state.totalAmount + action.payload.price,
//         };
//       case 'REMOVE_FROM_CART':
//         const updatedItems = state.items.filter(
//           (item) => item.id !== action.payload
//         );
//         const updatedTotal = state.totalAmount - action.payload.price;
//         return { ...state, items: updatedItems, totalAmount: updatedTotal };
//       default:
//         return state;
//     }
//   };
  
//   export default cartReducer;



// src/redux/reducers/cartReducer.js
const cartReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;




