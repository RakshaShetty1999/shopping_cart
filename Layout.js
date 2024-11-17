// src/components/Layout.js
import React from 'react';
import { Container } from 'react-bootstrap';
import TopNavbar from './TopNavbar'; // Assuming you have TopNavbar component
import Footer from './Footer'; // Assuming you have Footer component

const Layout = ({ children }) => {
  return (
    <div>
      <TopNavbar />  {/* Top Navbar */}
      <Container className="my-4">
        {children} {/* This will render the page content dynamically */}
      </Container>
      <Footer />  {/* Footer */}
    </div>
  );
};

export default Layout;
