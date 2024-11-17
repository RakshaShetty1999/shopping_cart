import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';
import ProductCategory from './pages/ProductCategory';
import LoginPage from './pages/LoginPage';
import OrderConfirmation from './pages/OrderConfirmation';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
  //   <Router>
  //   {/* <nav>
  //     <Link to="/">Home</Link> | <Link to="/cart">Cart</Link> | <Link to="/checkout">Checkout</Link>
  //   </nav> */}
  //   <Routes>
  //     <Route path="/" element={<HomePage />} />
  //     <Route path="/cart" element={<CartPage />} />
  //     <Route path="/checkout" element={<CheckoutPage />} />
  //     <Route path="/login" element={<LoginPage />} />
  //     <Route path="/order-confirmation" element={<OrderConfirmation />} />
  //   </Routes>
  // </Router>


  <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/category/:category" element={<ProductCategory />}/>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
         <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
