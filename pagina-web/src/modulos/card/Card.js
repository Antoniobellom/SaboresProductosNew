import React from 'react';
import './Card.css';


const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="discount-tag">-57%</span>
        <span className="cart-icon">🛒</span> 
      </div>
      <img src={process.env.PUBLIC_URL + '/img/chocolate.png'} alt="Shaker Bottle" className="product-image" />
      <div className="card-body">
        <div className="brand-info">
          <span className="brand-name">Brand</span>
          <span className="product-name">Proteina Chocolate cc</span>
        </div>
        <div className="pricing-info">
          <span className="current-price">$7.990</span>
          <span className="original-price">$9.990</span>
        </div>
        <div className="shipping-info">
          <span className="shipping-tag">ENVÍO GRATIS STGO</span>
        </div>
        <button className="action-button">Hug x Hug</button>
      </div>
    </div>
  );
};

export default Card;
