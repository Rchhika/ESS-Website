import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
<<<<<<< Updated upstream

function App() {
=======
import Shop from './pages/Shop';
import CartPage from './pages/CartPage'; 
import { useCart } from './context/CartContext';

function App() {
  const { addToCart } = useCart();

>>>>>>> Stashed changes
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< Updated upstream
        {/* Add more routes like <Route path="/shop" element={<Shop />} /> */}
=======
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage />} />
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;
