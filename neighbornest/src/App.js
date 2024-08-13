import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/NewsCard.css';
import AdminEvents from './pages/AdminEvents';
import AdminProfile from './pages/AdminProfile';  
import Resident from './pages/Resident';
import Requests from './pages/Requests';

function App() {
  
  return (
    <Router>
      <div className="App">
        
          <Routes>
            <Route path="/admin-events" element={<AdminEvents />} />
            <Route path="/admin-profile" element={<AdminProfile />} />  {/* Add the AdminProfile route */}
            <Route path="/resident" element={<Resident/>}/>
            <Route path="/" element={<Resident />} />
            <Route path="/requests" element={<Requests />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
