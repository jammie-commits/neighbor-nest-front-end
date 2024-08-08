import React from 'react';
import './ContactUs.css';

const Contacts = () => {
  return (
    <div id="contact-us">
      <header className="header">
        <img src="/images/White_And_Black_Modern_Abstract_Beauty_Logo-removebg-preview 1 (1).png" alt="Logo" className="logo" />
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/features">Features</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <button className="login-button">Login/Create Account</button>
      </header>

      <div className="contact-container">
        <div className="contact-info">
          <h1>Let's Talk</h1>
          <p>Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.</p>
          <h2>Email</h2>
          <p>beebsa@gmail.com</p>
          <h2>Socials</h2>
          <p><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></p>
          <p><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></p>
          <p><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></p>
        </div>
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="service">What service are you interested in</label>
            <select id="service" name="service" required>
              <option value="">Select project type</option>
              <option value="event-planning">Event Planning</option>
              <option value="news-sharing">News Sharing</option>
            </select>

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <footer>
        <div className="contacts">
          <h3>Contacts</h3>
          <p>Phone: (334) 202-4792</p>
          <p>Email: nadoaya@comcast.net</p>
          <p>Address: 950 Devonshire Ave Camp Hill, PA 17011, Johannesburg, South Africa</p>
          <div className="socials">
            <a href="https://instagram.com">Instagram</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://facebook.com">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;
