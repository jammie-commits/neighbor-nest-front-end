import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import '../styles/LandingPage.css';
=======
import '../LandingPage.css';
>>>>>>> arnold2

export default function Header() {
  return (
    <header className='header-container'>
      <div className='logo'>
      </div>
      <nav className='navbar'>
        <Link to="/" className='home'>Home</Link>
        <Link to="/#services" className='features'>Features</Link>
        <Link to="/about-us" className='about-us'>About Us</Link>
        <Link to="/contact-us" className='contact-us1'>Contact Us</Link>
        <button className='header-button'>
        <Link to="/login" className='login-create-account'>Login or Create Account</Link>
        </button>
      </nav>
    </header>
  );
}
