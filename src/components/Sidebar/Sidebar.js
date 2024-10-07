import React, { useState } from 'react';
import './Sidebar.scss';

const Sidebar = ({ products, visible, toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`sidebar ${visible ? 'visible' : ''}`}>
      <button onClick={toggleSidebar}>Close</button>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <div className="cart-products">
        {filteredProducts.map(product => (
          <div key={product.id} className="cart-item">
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
