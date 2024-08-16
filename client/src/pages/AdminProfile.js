// src/pages/AdminProfile.js
import React from 'react';
import './AdminProfile.css';

function AdminProfile() {
  return (
    <div className="admin-profile-container">
      <div className="admin-profile-header">
        <button className="back-button">&larr;</button>
        <h2>Admin Profile</h2>
        <button className="edit-button">Edit</button>
      </div>
      <div className="admin-profile-content">
        <div className="profile-info">
          <img src="https://via.placeholder.com/150" alt="Admin Avatar" className="profile-avatar" />
          <div className="profile-details">
            <h3>Alexa Rawles</h3>
            <p>alexarawles@gmail.com</p>
          </div>
        </div>
        <div className="form-container">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your First Name" />
            </div>
            <div className="form-group">
              <label>Neighborhood</label>
              <input type="text" placeholder="Your First Name" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="text" placeholder="Your First Name" />
            </div>
            <div className="form-group">
              <label>Block</label>
              <input type="text" placeholder="Your First Name" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Gender</label>
              <input type="text" placeholder="Your First Name" />
            </div>
            <div className="form-group">
              <label>House Number</label>
              <input type="text" placeholder="Your First Name" />
            </div>
          </div>
          <div className="email-address-section">
            <h4>My email Address</h4>
            <div className="email-item">
              <div className="email-icon">📧</div>
              <div className="email-details">
                <p>alexarawles@gmail.com</p>
                <p>1 month ago</p>
              </div>
            </div>
            <button className="add-email-button">+ Add Email Address</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
