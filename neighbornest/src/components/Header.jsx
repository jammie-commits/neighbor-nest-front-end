import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to="/">FitFusion</Link>
      </div>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact-us">Contact Us</Link>
        <button className='login-button'>
          <Link to="/login">Login</Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;
