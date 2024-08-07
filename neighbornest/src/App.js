import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './Pages/LandingPage';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/header" component={Header} />
          <Route path="/herosection" component={HeroSection} />
          <Route path="/services" component={Services} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/footer" component={Footer} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
