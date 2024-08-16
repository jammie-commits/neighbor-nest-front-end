
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login'; 
import Signup from './pages/Signup';
import DashboardAdmin from './pages/DashboardAdmin';
import ContactUs from './components/ContactUs/ContactUs'; 
import AboutUs from './components/AboutUs/AboutUs'; 
import Dashboard from './components/Superadmin/Dashboard';
import ProfilePage from './components/ProfilePage'; 
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import AdminProfile from './pages/AdminProfile';  
import ResidentDashboard from './pages/ResidentDashboard';
import ResidentActivity from './pages/ResidentActivity';
import ResidentSubmission from './pages/ResidentSubmission';
function App() {
  
  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admindashboard" element={<DashboardAdmin />} />
       
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dashboard/*" element={<Dashboard />} /> 
        <Route path="/profile" element={<ProfilePage />} />
        
        <Route path="/admin-profile" element={<AdminProfile />} />  {/* Add the AdminProfile route */}
        <Route path="/resident/dashboard" element={<ResidentDashboard />} />
        <Route path="/resident/activity" element={<ResidentActivity />} />
        <Route path="/resident/submissions" element={<ResidentSubmission />} />
      </Routes>

    </Router>
  );
}

export default App;
