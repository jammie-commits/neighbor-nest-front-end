import React, { useState } from 'react';
import styles from './ContactUs.module.css';

const Contacts = () => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the code to handle the form submission, like sending the data to a server

    // Show the submission success notification
    setSubmissionSuccess(true);

    // Clear the form or keep the data based on your preference
    e.target.reset();

    // Hide the notification after a few seconds (optional)
    setTimeout(() => {
      setSubmissionSuccess(false);
    }, 3000); // Hides after 3 seconds
  };

  return (
    <div id="contact-us">
      <header className={styles.header}>
        <img 
          src="/images/White_And_Black_Modern_Abstract_Beauty_Logo-removebg-preview 1 (1).png" 
          alt="Logo" 
          className={styles.logo} 
        />
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/features">Features</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <button className={styles['login-button']}>Login/Create Account</button>
      </header>

      <div className={styles['contact-container']}>
        <div className={styles['contact-info']}>
          <h1>Let's Talk</h1>
          <p>"Have a suggestion, a question, or an idea? Contact us and help us make our neighborhood even better through seamless event planning and timely news sharing."</p>
          <h2>Email</h2>
          <p>neighbornest@gmail.com</p>
          <h2>Socials</h2>
          <p><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></p>
          <p><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></p>
          <p><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></p>
        </div>
        <div className={styles['contact-form']}>
          <form onSubmit={handleSubmit}>
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
          {submissionSuccess && (
            <div className={styles['submission-notification']}>
              Submission Successful!
            </div>
          )}
        </div>
      </div>

      <footer>
        <div className={styles.contacts}>
          <h3>Contacts</h3>
          <p>Phone: (334) 202-4792</p>
          <p>Email: nadoaya@comcast.net</p>
          <p>Address: 950 Devonshire Ave Camp Hill, PA 17011, Johannesburg, South Africa</p>
          <div className={styles.socials}>
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
