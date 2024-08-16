import React, { useState } from 'react';
import Header from '../Header'; 
import Footer from '../Footer'; 
import styles from './ContactUs.module.css';

const Contacts = () => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    setSubmissionSuccess(true);

    e.target.reset();

    setTimeout(() => {
      setSubmissionSuccess(false);
    }, 3000); 
  };

  return (
    <div id="contact-us">
      <Header /> 

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

      <Footer /> 
    </div>
  );
};

export default Contacts;
