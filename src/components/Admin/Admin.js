import React, { useState } from 'react';
import './Admin.scss';
import { v4 as uuidv4 } from 'uuid';

const Admin = ({ products, setProducts }) => {
  const [formData, setFormData] = useState({ name: '', price: '', barcode: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    const newProduct = { ...formData, id: uuidv4(), barcode: uuidv4() };
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="admin-page">
      <h2>Admin Page</h2>
      <div className="form">
        <input 
          type="text" 
          name="name" 
          placeholder="Product Name" 
          value={formData.name} 
          onChange={handleInputChange}
        />
        <input 
          type="text" 
          name="price" 
          placeholder="Price" 
          value={formData.price} 
          onChange={handleInputChange}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <p>{product.name} - {product.price} - {product.barcode}</p>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
