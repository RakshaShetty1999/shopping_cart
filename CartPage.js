// // // src/pages/CartPage.js
// // import React from 'react';
// // import CartSummary from '../components/CartSummary';

// // const CartPage = () => (
// //   <div>
// //     <h1>Your Cart</h1>
// //     <CartSummary />
// //   </div>
// // );

// // export default CartPage;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Container, ListGroup, Button } from 'react-bootstrap';

// const CartPage = () => {
//   const items = useSelector((state) => state.cart.items);
//   const totalAmount = useSelector((state) => state.cart.totalAmount);

//   return (
//     <Container className="my-5">
//       <h2 className="text-center mb-4">Your Cart</h2>
//       <ListGroup variant="flush">
//         {items.map((item) => (
//           <ListGroup.Item key={item.id} className="d-flex justify-content-between">
//             <span>{item.title}</span>
//             <span>${item.price}</span>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//       <h4 className="text-end mt-4">Total: ${totalAmount.toFixed(2)}</h4>
//       <div className="text-center mt-4">
//         <Button variant="success" href="/checkout">Proceed to Checkout</Button>
//       </div>
//     </Container>
//   );
// };

// export default CartPage;


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/actions/cartActions';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CartSummary = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const navigate = useNavigate();

  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const subtotal = calculateSubtotal(); // Calculate subtotal

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Cart Summary</h2>
      {cartItems.map((item) => (
        <Card key={item.id} className="mb-3">
          <Card.Body>
            <Row className="align-items-center">
              <Col md={8}>
                <h4>{item.title}</h4>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </Col>
              <Col md={4} className="text-md-right">
                <Button variant="outline-primary" size="sm" onClick={() => handleDecrement(item.id)} className="me-2">
                  -
                </Button>
                <Button variant="outline-primary" size="sm" onClick={() => handleIncrement(item.id)} className="me-2">
                  +
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleRemove(item.id)} className="me-2">
                  Remove
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
      
      {/* Display subtotal */}
      {cartItems.length > 0 && (
        <div className="text-end my-3">
          <h4>
            Subtotal: <span>${subtotal.toFixed(2)}</span>
          </h4>
        </div>
      )}

      {/* Checkout button */}
      {cartItems.length > 0 && (
        <div className="text-center">
          <Button variant="success" size="lg" onClick={handleCheckout} className="mt-3">
            Proceed to Checkout
          </Button>
        </div>
      )}
    </Container>
  );
};

export default CartSummary;
