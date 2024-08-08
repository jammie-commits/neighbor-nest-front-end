import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <img
        src="https://via.placeholder.com/40" // User's profile image URL
        alt="User Profile"
        className="profile-image"
      />
      <span className="username">John Rambo</span> {}
    </div>
  );
}

export default UserProfile;
