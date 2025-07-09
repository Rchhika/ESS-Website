import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">ESS Smart Home</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/solutions">Solutions</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
