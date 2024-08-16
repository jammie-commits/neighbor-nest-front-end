import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import styles from './Topbar.module.css';

const Topbar = ({ admins, neighborhoods, onSearchResults }) => {
    const [profileImage, setProfileImage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the profile image from localStorage or set a default one if not found
        const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
        setProfileImage(userProfile.profileImage || '/path_to_default_image.png');
    }, []);

    const handleNotificationClick = () => {
        navigate('/notifications');
    };

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();

        const filteredAdmins = admins.filter(admin =>
            admin.name.toLowerCase().includes(query) ||
            admin.email.toLowerCase().includes(query) ||
            admin.neighborhood.toLowerCase().includes(query)
        );

        const filteredNeighborhoods = neighborhoods.filter(neighborhood =>
            neighborhood.name.toLowerCase().includes(query) ||
            neighborhood.description.toLowerCase().includes(query)
        );

        onSearchResults({ admins: filteredAdmins, neighborhoods: filteredNeighborhoods });
    };

    return (
        <div className={styles.topbar}>
            <input
                type="text"
                placeholder="Search neighborhood, admins..."
                onChange={handleSearchChange}
            />
            <div className={styles['topbar-right']}>
                <div className={styles.notifications} onClick={handleNotificationClick}>
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <Link to="/profile" className={styles['user-info']}>
                    <img src={profileImage} alt="User" />
                </Link>
            </div>
        </div>
    );
};

export default Topbar;
