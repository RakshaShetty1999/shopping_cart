// src/redux/reducers/authReducer.js
const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return { isAuthenticated: true, user: action.payload };
      case 'LOGOUT_USER':
        return { isAuthenticated: false, user: null };
      default:
        return state;
    }
  };
  
  export default authReducer;