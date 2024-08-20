// src/components/Product.jsx
import React from 'react';

const Product = ({ name, price, stock }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Stock: {stock}</p>
    </div>
  );
};

export default Product;