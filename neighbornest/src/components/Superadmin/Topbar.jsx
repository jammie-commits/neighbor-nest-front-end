import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import styles from './Topbar.module.css';

const Topbar = () => {
    const [profileImage, setProfileImage] = useState('');

    useEffect(() => {
        // Fetch the profile image from localStorage or set a default one if not found
        const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
        setProfileImage(userProfile.profileImage || '/path_to_default_image.png');
    }, []);

    return (
        <div className={styles.topbar}>
            <input type="text" placeholder="Search neighborhood, admins..." />
            <div className={styles['topbar-right']}>
                <Link to="/notifications" className={styles.notifications}>
                    <FontAwesomeIcon icon={faBell} />
                </Link>
                <Link to="/profile" className={styles['user-info']}>
                    <img src={profileImage} alt="User" />
                </Link>
            </div>
        </div>
    );
};

export default Topbar;
