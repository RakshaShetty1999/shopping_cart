// // src/pages/CheckoutPage.js
// import React from 'react';
// import { useSelector } from 'react-redux';
// import CheckoutForm from '../components/CheckoutForm';
// import { Link } from 'react-router-dom';


// const CheckoutPage = () => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   return (
//     // <div>
//     //   {isAuthenticated ? <CheckoutForm /> : <LoginPrompt />}
//     // </div>
//     <div>
//       {isAuthenticated ? (
//         <CheckoutForm />
//       ) : (
//         <div>
//           <p>Please log in to proceed to checkout.</p>
//           <Link to="/login">
//             <button>Log In</button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;



import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutForm from '../components/CheckoutForm';
import { Link } from 'react-router-dom';
import { Container, Button, Alert } from 'react-bootstrap';

const CheckoutPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Container className="my-5">
      {isAuthenticated ? (
        <CheckoutForm />
      ) : (
        <div className="text-center">
          <Alert variant="warning" className="mb-4">
            Please log in to proceed to checkout.
          </Alert>
          <Link to="/login">
            <Button variant="primary" className="px-4">
              Log In
            </Button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default CheckoutPage;
