import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import ProductFilter from './components/ProductFilter/ProductFilter.js';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Us Page</h1>;
const Services = () => <h1>Services Page</h1>;
const Contact = () => <h1>Contact Page</h1>;


function App() {
  return (
    <Router>
      <>
      <div className="App">
        <Navbar />  {/* Navigation Bar with links to categories */}
        <Routes>
          {/* Route for the home page which shows all products */}
          <Route path="/" element={<ProductFilter />} />
          
          {/* Dynamic route for each category */}
          <Route path="/category/:category" element={<ProductFilter />} />
          <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
<Footer/>
      </>

    </Router>
  );
}

export default App;













