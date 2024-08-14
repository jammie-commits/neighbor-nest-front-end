import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard1 from './Dashboard1';
import Admin from './Admin';
import Neighborhood from './Neighborhood';
import './Dashboard.css';
import Settings from '../Settings';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleViewChange = (view) => {
        navigate(view);
    };

    return (
        <div className="dashboard">
            <Sidebar setView={handleViewChange} />
            <div className="main-content">
                <Topbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard1 />} />
                        <Route path="/dashboard1" element={<Dashboard1 />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/neighborhood" element={<Neighborhood />} />

                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

