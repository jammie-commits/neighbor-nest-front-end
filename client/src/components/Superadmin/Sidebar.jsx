import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = ({ setView }) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <img src={`${process.env.PUBLIC_URL}/images/White_And_Black_Modern_Abstract_Beauty_Logo-removebg-preview 1 (1).png`} alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/dashboard/admin" onClick={() => setView('/dashboard/admin')}>Admin</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/neighborhood" onClick={() => setView('/dashboard/neighborhood')}>Neighborhood</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/logout" onClick={() => setView('/dashboard/logout')}>Logout</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
