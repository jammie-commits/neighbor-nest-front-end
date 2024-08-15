import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../styles/Sidebar.css';
import logo from '../assets/logo.png'

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast((t) => (
      <div className="logout-toast">
        <p>Are you sure you want to log out? You'll have to log in afresh.</p>
        <button
          onClick={async () => {
            try {
              const response = await fetch('/api/logout', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              if (!response.ok) {
                throw new Error('Failed to logout');
              }
              navigate('/login');
              toast.dismiss(t.id);
            } catch (error) {
              console.error('Error logging out:', error);
            }
          }}
          className="logout-confirm"
        >
          Logout
        </button>
        <button
          onClick={() => {
            toast.dismiss(t.id);
          }}
          className="logout-cancel"
        >
          Cancel
        </button>
      </div>
    ));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src= {logo} alt="Logo" />
      </div>
      <nav className="sidebar-menu">
        <ul>
          <li><Link to="/admindashboard">Dashboard</Link></li>
          <li><Link to="/residents">Residents</Link></li>
          <li><Link to="/requests">Requests</Link></li>
        </ul>
      </nav>
      <div className="sidebar-bottom">
        <ul>
          <li><Link to="/settings">Settings</Link></li>
          <li>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;