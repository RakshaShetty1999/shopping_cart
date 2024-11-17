// // // src/components/ProductItem.js
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/actions/cartActions';

// const ProductItem = ({ product }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div>
//       <h3>{product.title}</h3>
//       <p>${product.price}</p>
//       <img src={product.image} alt={product.title} style={{ width: '100px' }} />
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductItem;


import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import "./ProductItem.css";


  const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

       const handleAddToCart = () => {
         dispatch(addToCart(product));
      };
  return (
    <Card className="custom-card">
      <Card.Img
            variant="top"
            className="py-3 card-img"
            src={product.image}
          />
      <Card.Body className="text-center">
      <Card.Title className="fs-6">
              {product.title.slice(0, 30)} ...
            </Card.Title>
            <Card.Text className="text-capitalize text-decoration-none fs-6">
          <strong>Price:</strong> ${product.price.toFixed(2)}
        </Card.Text>
        <div className="py-2 d-flex justify-content-center fs-6">
          <ReactStars
            count={5}
            value={product.rating.rate}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
          {` (${product.rating.count})`}
        </div>
        <Button variant="primary" className="w-100" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <div className="mt-2">
          <Link to={`/category/${product.category}`} className="btn btn-link">
            View more in {product.category}
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
