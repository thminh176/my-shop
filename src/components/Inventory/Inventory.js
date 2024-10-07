import React from 'react';
import './Inventory.scss';

const Inventory = ({ shelves }) => {
  return (
    <div className="inventory-page">
      <h2>Inventory</h2>
      <div className="shelves">
        {shelves.map((shelf, index) => (
          <div key={index} className="shelf">
            <h3>Shelf {index + 1}</h3>
            <div className="items-grid">
              {shelf.map((item, idx) => (
                <div key={idx} className="item">
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
