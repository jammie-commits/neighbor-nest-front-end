import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <header className="header">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <button className="login-button">Login/Create Account</button>
      </header>

      <div className="about-content">
        <h1>Who We Are</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...</p>
        <img src="/images/rafiki.png" alt="Team" className="about-image" />
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...</p>
        <img src="/images/Frame 492.png" alt="Building" className="about-image" />
      </div>

      <div className="contact-info">
        <h3>Contacts</h3>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@example.net</p>
        <p>Address: 900 Domenico Ave Cape City, NL 12317, Johannesburg, South Africa</p>
        <div className="socials">
            
          <a href="https://instagram.com">Instagram</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://facebook.com">Facebook</a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
