// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <p>© {new Date().getFullYear()} Aditya Kumar — Data Analyst Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;