import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Admin from './Admin';
import Neighborhood from './Neighborhood';
import Logout from './Logout';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const [admins, setAdmins] = useState([]);
    const [neighborhoods, setNeighborhoods] = useState([]);
    const [searchResults, setSearchResults] = useState({ admins: [], neighborhoods: [] });
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/admins')
            .then(response => response.json())
            .then(data => {
                setAdmins(data);
                setSearchResults(prev => ({ ...prev, admins: data })); // Set initial search results
            })
            .catch(error => console.error('Error fetching admins:', error));

        fetch('http://localhost:5000/neighborhoods')
            .then(response => response.json())
            .then(data => {
                setNeighborhoods(data);
                setSearchResults(prev => ({ ...prev, neighborhoods: data })); // Set initial search results
            })
            .catch(error => console.error('Error fetching neighborhoods:', error));
    }, []);

    const handleViewChange = (view) => {
        navigate(view);
    };

    return (
        <div className={styles.dashboard}>
            <Sidebar setView={handleViewChange} />
            <div className={styles['main-content']}>
                <Topbar
                    admins={admins}
                    neighborhoods={neighborhoods}
                    onSearchResults={setSearchResults}
                />
                <div className={styles.content}>
                    <Routes>
                        <Route
                            path="/admin"
                            element={<Admin admins={searchResults.admins} />}
                        />
                        <Route
                            path="/neighborhood"
                            element={<Neighborhood neighborhoods={searchResults.neighborhoods} />}
                        />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
