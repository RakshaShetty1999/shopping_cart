// src/components/CartSummary.js
import React from 'react';
import { useSelector } from 'react-redux';


const CartSummary = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div>
      <h2>Cart Summary</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${totalAmount}</p>
    </div>
  );
};

export default CartSummary;





