import './App.css';
import Resident from './pages/Resident';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs'; 
import Login from './pages/Login'; 
import Signup from './pages/Signup';
import DashboardAdmin from './pages/DashboardAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admindashboard" element={<DashboardAdmin />} />
        <Route path="/resident" element={<Resident />} />
      </Routes>
    </Router>
  );
}

export default App;
