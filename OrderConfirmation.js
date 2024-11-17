// src/pages/OrderConfirmation.js
import React from 'react';
// import { useSelector } from 'react-redux';
import { Container, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {

  // const paymentMethod = useSelector((state) => state.checkout.paymentMethod);
  return (
    <Container className="my-5">
      <Alert variant="success" className="text-center">
        <h2>Thank you for your purchase!</h2>
        <p>Your order has been successfully placed. You will receive a confirmation email shortly.</p>
        {/* <p>Payment Method: {paymentMethod}</p> */}
      </Alert>
      <div className="text-center">
        <Link to="/">
          <Button variant="primary">Continue Shopping</Button>
        </Link>
      </div>
    </Container>
  );
};

export default OrderConfirmation;
