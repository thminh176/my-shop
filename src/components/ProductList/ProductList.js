import React from 'react';
import './ProductList.scss';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
