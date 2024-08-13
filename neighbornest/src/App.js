
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

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
import './components/NewsCard.css';
import AdminEvents from './pages/AdminEvents';
import AdminProfile from './pages/AdminProfile';  
import Resident from './pages/Resident';
import Requests from './pages/Requests';


function App() {
  
  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
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
        <Route path="/admin-events" element={<AdminEvents />} />
        <Route path="/admin-profile" element={<AdminProfile />} />  {/* Add the AdminProfile route */}
        <Route path="/resident" element={<Resident/>}/>
        <Route path="/" element={<Resident />} />
        <Route path="/requests" element={<Requests />} />
      </Routes>

    </Router>
  );
}

export default App;
