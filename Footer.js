import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-auto py-3">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Shopping Cart. Devoloped by Raksha</p>
        <p>
          <a href="/privacy-policy" className="text-white">Privacy Policy</a> | 
          <a href="/terms-of-service" className="text-white">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
