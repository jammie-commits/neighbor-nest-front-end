import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage'; // Import DefaultPage
import ContactUs from './components/ContactUs/ContactUs'; // Import ContactUs
import AboutUs from './components/AboutUs/AboutUs'; // Import AboutUs
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>

          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<DefaultPage />} /> {/* Default route */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<DefaultPage />} /> {/* Handle unmatched routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
