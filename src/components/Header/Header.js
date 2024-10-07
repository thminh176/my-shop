import React, { useState } from 'react';
import './Header.scss';
import { useTranslation } from 'react-i18next';

const Header = ({ toggleSidebar, toggleDarkMode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const { i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    toggleDarkMode();
  };

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <div className="logo">My Shop</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/inventory">Quản Lý Kho</a></li>
          <li><a href="/admin">Admin</a></li>
        </ul>
      </nav>
      <div className="actions">
        <button onClick={() => switchLanguage('vi')}>Tiếng Việt</button>
        <button onClick={() => switchLanguage('en')}>English</button>
        <button onClick={handleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
      </div>
    </header>
  );
};

export default Header;
