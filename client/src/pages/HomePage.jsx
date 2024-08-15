import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
<<<<<<< HEAD
import '../styles/LandingPage.css';
=======
import '../LandingPage.css';
>>>>>>> arnold2

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <HeroSection />
        <section className="services-section">
          <Services />
        </section>
        <section className="testimonials-section">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
