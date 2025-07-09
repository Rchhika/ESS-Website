import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import ProductCard from '../components/ProductCard';
import '../styles/Shop.css';

const Shop = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsSnapshot = await getDocs(collection(db, 'products'));
      const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log("Fetched Products:", productsList);
      setProducts(productsList);
    };
    fetchProducts();
  }, []);

  return (
    <div className="shop">
      <h2>Smart Home Devices</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} {...product} onAddToCart={() => onAddToCart(product)} />
        ))}
      </div>
    </div>
  );
};

export default Shop;