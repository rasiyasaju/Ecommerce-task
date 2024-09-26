import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Footer.css';

// Footer data array
const footerData = [
  {
    type: 'logo',
    imageUrl: 'https://www.achieversit.com/assets/images/logo-white.png',
    altText: 'Company Logo'
  },
  {
    title: 'Quick Links',
    items: [
      { name: 'Home', path: '/' }, // Define paths for routing
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' }
    ]
  },
  {
    title: 'Contact Us',
    items: [
      'Email: rasiya25@gmail.com',
      'Phone: +1 (555) 123-4567',
      'Address: 108 Dalriada, Glasgow, UK'
    ]
  }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {footerData.map((column, index) => {
          if (column.type === 'logo') {
            // Render the first column with the logo
            return (
              <div key={index} className="footer-column footer-logo">
                <img src={column.imageUrl} alt={column.altText} className="logo" />
              </div>
            );
          } else if (column.title === 'Quick Links') {
            // Render Quick Links with React Router's Link for navigation
            return (
              <div key={index} className="footer-column">
                <h3>{column.title}</h3>
                <ul>
                  {column.items.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.path} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          } else {
            // Render the third column for Contact Us
            return (
              <div key={index} className="footer-column">
                <h3>{column.title}</h3>
                <ul>
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          }
        })}
      </div>
    </footer>
  );
};

export default Footer;
