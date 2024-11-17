// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { useSelector } from 'react-redux';

// const TopNavbar = () => {
//   const cartItemsCount = useSelector((state) => state.cart.items.length);

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           Shopping Cart
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link as={Link} to="/">
//               Home
//             </Nav.Link>
//             <Nav.Link as={Link} to="/cart">
//               Cart ({cartItemsCount})
//             </Nav.Link>
//             <Nav.Link as={Link} to="/checkout">
//               Checkout
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default TopNavbar;


import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const TopNavbar = () => {
  const cartItemsCount = useSelector((state) => state.cart.items.length);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Shopping Cart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {/* <Nav.Link as={Link} to="/category">Category</Nav.Link> */}
            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="ms-2">Cart ({cartItemsCount})</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;

