import React from 'react';
import products from '../Pages/FilterData.js';
import { useParams } from 'react-router-dom';
import './ProductFilter.css';

function ProductCard() {
  const { category } = useParams();

  // Filter products based on selected category or show all if category is "All"
  const filteredProducts = category === undefined || category === 'All'
    ? products
    : products.filter((product) => product.category === category);

  return (
    <div className="container">
      {filteredProducts.map((item, index) => (
        <div key={index} className="card">
          <img src={item.image} alt={item.name} className="productImg" />
          <h2 className="productName">{item.name}</h2>
          <pre className="productPrice">
            ${item.OfferPrice} <strike>${item.originalPrice}</strike>
            <span> Quantity: {item.quantity} </span>
          </pre>
          
          {/* Conditional rendering for stock and availability */}
          {item.quantity <= 5 && item.quantity > 1 && (
            <p className="lowStockMessage">{item.quantity} items left</p>
          )}
          {item.quantity === 1 && (
            <p className="lowStockMessage">Hurry up! Only 1 item left</p>
          )}
          {item.inStock ? (
            <button className="available">Add to Cart</button>
          ) : (
            <button className="notAvailable">Out of Stock</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
