import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './components/ContactUs/ContactUs'; 
import AboutUs from './components/AboutUs/AboutUs'; 
import Dashboard from './components/Superadmin/Dashboard';
import ProfilePage from './components/ProfilePage'; 
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/dashboard/*" element={<Dashboard />} /> 
          <Route path="/profile" element={<ProfilePage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

