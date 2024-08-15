import React from 'react';
import { Link } from 'react-router-dom';
//import './Sidebar.css';

const ResidentSidebar = ({ setView }) => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/images/White_And_Black_Modern_Abstract_Beauty_Logo-removebg-preview 1 (1).png`} alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/resident/dashboard" onClick={() => setView('/resident/dashboard')}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/resident/activity" onClick={() => setView('/resident/activity')}>Activity</Link>
                    </li>
                    <li>
                        <Link to="/resident/submissions" onClick={() => setView('/resident/submissions')}>Submissions</Link>
                    </li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </nav>
        </div>
    );
};

export default ResidentSidebar;
