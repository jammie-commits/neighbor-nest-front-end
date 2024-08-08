// src/components/UserProfile.js
import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <img
        src="https://via.placeholder.com/40" // Replace with the user's profile image URL
        alt="User Profile"
        className="profile-image"
      />
      <span className="username">John Doe</span> {/* Replace with actual username */}
    </div>
  );
}

export default UserProfile;
