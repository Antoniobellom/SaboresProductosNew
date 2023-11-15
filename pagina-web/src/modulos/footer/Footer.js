// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="brand-text">Forma parte de Brand</p>
      <div className="email-input-container">
        <input type="email" className="email-input" placeholder="nombre@contacto.cl" />
        <button className="subscribe-button">Suscribirse</button>
      </div>
    </div>
  );
};

export default Footer;
