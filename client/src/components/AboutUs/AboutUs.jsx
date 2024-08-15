import React from 'react';
import styles from './AboutUs.module.css';

function AboutUs() {
  return (
    <div className={styles['about-us']}>
      <header className={styles.header}>
        <img 
          src="/images/White_And_Black_Modern_Abstract_Beauty_Logo-removebg-preview 1 (1).png" 
          alt="Neighbor Nest Logo" 
          className={styles.logo} 
        />
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/about" className={styles['active-link']}>About Us</a>
          <a href="/features">Features</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <button className={styles['login-button']}>Login/Create Account</button>
      </header>

      <div className={styles['about-hero']}>
        <h1>Welcome to Neighbor Nest</h1>
        <p>Connecting neighborhoods, building communities.</p>
      </div>

      <div className={styles['about-content']}>
        <section className={styles['about-section']}>
          <h2>About Neighbor Nest</h2>
          <p>Neighbor Nest is a dynamic platform designed to strengthen the fabric of communities by fostering meaningful connections among neighbors. Whether you're planning a local event, sharing important news, or simply looking to stay informed, Neighbor Nest is your go-to solution for building a stronger, more connected neighborhood.</p>
        </section>

        <section className={styles['vision-section']}>
          <h2>Our Vision</h2>
          <p>We envision a world where neighborhoods are more than just places to live—they are vibrant, interconnected communities where everyone feels valued, heard, and engaged. Our goal is to create a platform that not only facilitates communication but also inspires a sense of belonging and unity, transforming neighborhoods into supportive networks where every voice matters.</p>
        </section>

        <section className={styles['offer-section']}>
          <h2>What We Offer</h2>
          <ul>
            <li>Event Planning: Easily organize and promote neighborhood events to bring everyone together.</li>
            <li>News Sharing: Keep everyone informed with the latest news and updates in your neighborhood.</li>
          </ul>
        </section>

        <div className={styles['about-images']}>
          <img 
            src="https://img.freepik.com/free-photo/back-view-community-young-people-united_23-2148431305.jpg?ga=GA1.1.308247929.1723661180&semt=ais_hybrid" 
            alt="Community Engagement" 
            className={styles['about-image']} 
          />
          <img 
            src="https://img.freepik.com/free-photo/group-friends-having-fun-during-white-party-with-drinks-by-pool_23-2149485998.jpg?size=626&ext=jpg" 
            alt="Neighborhood Building" 
            className={styles['about-image']} 
          />
        </div>
      </div>

      <footer className={styles['contact-info']}>
        <h3>Contacts</h3>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@example.net</p>
        <p>Address: 900 Domenico Ave Cape City, NL 12317, Johannesburg, South Africa</p>
        <div className={styles.socials}>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://facebook.com">Facebook</a>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
