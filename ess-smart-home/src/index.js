import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { CartProvider } from './context/CartContext';

const domain = 'dev-d7rxy5wp27qxvbg6.us.auth0.com';
const clientId = 'xjFnIaSsRnzILclYDSswICHm8hh2m9jW';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <CartProvider>
        <App />
      </CartProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// Optional: for performance logging
reportWebVitals();
