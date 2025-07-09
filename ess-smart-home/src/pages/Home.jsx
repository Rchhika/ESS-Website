import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h2>Make Your Home Smarter</h2>
        <p>Shop smart switches, sensors, lighting and more.</p>
        <Link to="shop">
        <button>Shop Now</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
