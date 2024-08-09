import React from 'react';
import './ProfilePage.css';

function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <img src="/images/White_And_Black_Modern_Abstract_Beauty_Logo-removebg-preview 1 (1).png" alt="Logo" className="profile-logo" />
          <button className="edit-button">Edit</button>
        </div>
        <div className="profile-info">
          <img src="/path_to_profile_image" alt="Profile" className="profile-image" />
          <div className="profile-details">
            <h2>Alexa Rawles</h2>
            <p>alexarawles@gmail.com</p>
          </div>
        </div>
        <div className="profile-form">
          <label>Full Name</label>
          <input type="text" placeholder="Your First Name" />
          
          <label>Email</label>
          <input type="email" placeholder="Your Email" />

          <label>Gender</label>
          <input type="text" placeholder="Your Gender" />

          <div className="email-section">
            <h3>My email Address</h3>
            <p className="email-item">alexarawles@gmail.com</p>
            <p className="email-time">1 month ago</p>
            <button className="add-email-button">+ Add Email Address</button>
          </div>
        </div>
      </div>

      <div className="contacts">
        <h3>Contacts</h3>
        <p><strong>Phone:</strong> (334) 202-4792</p>
        <p><strong>Email:</strong> nature.pro</p>
        <p><strong>Address:</strong> 998 Devonshire Ave, Camp Hill, PA 17011, Johannesburg, South Africa</p>
      </div>
    </div>
  );
}

export default ProfilePage;
