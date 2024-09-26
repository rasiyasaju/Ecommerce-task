import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const categories = ['All', 'Electronics', 'Clothes', 'MobilePhones', 'Laptop', 'Shoes'];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-links">
        {categories.map((category, index) => (
          <Link
            key={index}
            className="nav-link"
            to={category === 'All' ? '/' : `/category/${category}`}
          >
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
