import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ name, price, description, imageUrl, onAddToCart }) => {
  return (
<div className="product-card">
  <div className="product-info">
    <h3>{name}</h3>
    <p>{description}</p>
    <strong>R{price}</strong>
  </div>
  <button className="add-to-cart-btn" onClick={onAddToCart}>
    Add to Cart
  </button>
</div>

  );
};

export default ProductCard;