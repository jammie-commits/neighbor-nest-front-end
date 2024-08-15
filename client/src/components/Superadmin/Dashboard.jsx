import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Admin from './Admin';
import Neighborhood from './Neighborhood';
import Logout from './Logout';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleViewChange = (view) => {
        navigate(view);
    };

    return (
        <div className={styles.dashboard}>
            <Sidebar setView={handleViewChange} />
            <div className={styles['main-content']}>
                <Topbar />
                <div className={styles.content}>
                    <Routes>
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/neighborhood" element={<Neighborhood />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
