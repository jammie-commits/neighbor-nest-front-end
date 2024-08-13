import './App.css';
import Resident from './pages/Resident';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import AboutUs from './pages/AboutUs';
// import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashboardAdmin from './pages/DashboardAdmin';
import DefaultPage from './pages/DefaultPage';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import Dashboard from './components/Superadmin/Dashboard';
import ProfilePage from './components/ProfilePage';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
        <Route path="/" element={<DefaultPage />} /> 
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dashboard/*" element={<Dashboard />} /> 
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<DefaultPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
