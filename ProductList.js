// // src/components/ProductList.js
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import ProductItem from './ProductItem';
// import { fetchProducts } from '../redux/actions/productActions';

// const ProductList = () => {
//   const products = useSelector((state) => state.product.products);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   return (
//     <div>
//       {products.map((product) => (
//         <ProductItem key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;



// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ProductItem from './ProductItem';
// import { fetchProducts } from '../redux/actions/productActions';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const categories = [...new Set(products.map((product) => product.category))];

     useEffect(() => {
     const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container className="my-2">
      <h2 className="text-center mb-4">Our Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </Container>
    
  );
};

export default ProductList;
