import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProductList from './components/ProductList/ProductList';
import Admin from './components/Admin/Admin';
import Inventory from './components/Inventory/Inventory';
import Popup from './components/Popup/Popup';
import './App.scss';
import productsData from './data/products.json';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [products, setProducts] = useState(productsData.products || []);
  const [shelves, setShelves] = useState(productsData.shelves || []);
  const [popupVisible, setPopupVisible] = useState(false);
  const [total, setTotal] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const togglePopup = () => setPopupVisible(!popupVisible);

  const authenticateAdmin = () => {
    const password = prompt('Enter Admin Password:');
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect Password');
    }
  };

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <Header toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} />
        <Sidebar products={products} visible={sidebarVisible} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/inventory" element={<Inventory shelves={shelves} />} />
          <Route 
            path="/admin" 
            element={isAuthenticated ? <Admin products={products} setProducts={setProducts} /> : <Navigate to="/" replace />}
          />
        </Routes>
        <button onClick={togglePopup}>Checkout</button>
        <Popup show={popupVisible} togglePopup={togglePopup} total={total} />
      </div>
    </Router>
  );
}

export default App;
