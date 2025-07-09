import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/Header.css';
import '../styles/auth_buttons.css';

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <header className="header">
      <h1 className="logo">ESS Smart Home</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/solutions">Solutions</Link>

        {!isAuthenticated ? (
          <button className="auth-btn" onClick={() => loginWithRedirect()}>Login</button>
        ) : (
          <>
            <button className = "auth-btn"onClick={() => logout({ returnTo: window.location.origin })}>
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;