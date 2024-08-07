import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import '../App.css';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
