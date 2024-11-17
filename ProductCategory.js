import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // To get the category from URL params
import { useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const ProductCategory = () => {
  const { category } = useParams();  // Retrieve the category from URL
  const products = useSelector((state) => state.product.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    if (category) {
      const filtered = products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
      setFilteredProducts(filtered);
    }
  }, [category, products]);

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Category: {category}</h2>
      {filteredProducts.length === 0 ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading products...</p>
        </div>
      ) : (
        <Row>
          {filteredProducts.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductCategory;
