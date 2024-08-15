import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './Topbar.css';

const Topbar = () => {
    return (
        <div className="topbar">
            <input type="text" placeholder="Search neighborhood, admins..." />
            <div className="topbar-right">
                <div className="notifications">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <Link to="/profile" className="user-info">
                    <span>Katie</span>
                    <img src="user_profile_image_url" alt="User" />
                </Link>
            </div>
        </div>
    );
};

export default Topbar;
