import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ setView }) => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/images/White_And_Black_Modern_Abstract_Beauty_Logo-removebg-preview 1 (1).png`} alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/dashboard/dashboard1" onClick={() => setView('/dashboard/dashboard1')}>Dashboard 1</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/admin" onClick={() => setView('/dashboard/admin')}>Admin</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/neighborhood" onClick={() => setView('/dashboard/neighborhood')}>Neighborhood</Link>
                    </li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
