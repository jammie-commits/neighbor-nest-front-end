import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='white-black-modern' />
      <div className='frame-1'>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/features">Features</Link>
        <Link to="/contact-us">Contact Us</Link>
        <button className='frame-2'>
          <Link to="/login-or-create-account">Login or Create Account</Link>
        </button>
      </div>
    </div>
  );
}
