import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <header className="header">
        <img src="/images/White_And_Black_Modern_Abstract_Beauty_Logo-removebg-preview 1 (1).png" alt="Neighbor Nest Logo" className="logo" />
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/features">Features</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <button className="login-button">Login/Create Account</button>
      </header>

      <div className="about-content">
        <h1>About Neighbor Nest</h1>
        <p>Welcome to Neighbor Nest, your go-to platform for neighborhood connections, event planning, and news sharing. Our mission is to create a space where neighbors can stay connected, plan events, and share important news easily.</p>
        
        <h2>Our Vision</h2>
        <p>At Neighbor Nest, we envision a world where neighborhoods are closely knit communities where everyone is informed and engaged. We aim to foster community spirit and ensure everyone feels included.</p>

        <h2>What We Offer</h2>
        <ul>
          <li>Event Planning: Easily organize and promote neighborhood events to bring everyone together.</li>
          <li>News Sharing: Keep everyone informed with the latest news and updates in your neighborhood.</li>
        </ul>

        <img src="/images/rafiki.png" alt="Community Engagement" className="about-image" />
        <img src="/images/pexels-photo-3856042.jpeg" alt="Neighborhood Building" className="about-image" />
      </div>

      <footer className="contact-info">
        <h3>Contacts</h3>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@example.net</p>
        <p>Address: 900 Domenico Ave Cape City, NL 12317, Johannesburg, South Africa</p>
        <div className="socials">
          <a href="https://instagram.com">Instagram</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://facebook.com">Facebook</a>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
