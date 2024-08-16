import React from 'react';
import './AdminProfile.css'; // You can rename this file to ResidentProfile.css if needed

function ResidentProfile() {
  return (
    <div className="admin-profile-container">
      <div className="admin-profile-header">
        <button className="back-button">&larr;</button>
        <h2>Resident Profile</h2>
        <button className="edit-button">Edit</button>
      </div>
      <div className="admin-profile-content">
        <div className="profile-info">
          <img src="https://via.placeholder.com/150" alt="Resident Avatar" className="profile-avatar" />
          <div className="profile-details">
            <h3>John Doe</h3>
            <p>johndoe@example.com</p>
          </div>
        </div>
        <div className="form-container">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your Full Name" />
            </div>
            <div className="form-group">
              <label>Neighborhood</label>
              <input type="text" placeholder="Your Neighborhood" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="text" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label>Block</label>
              <input type="text" placeholder="Your Block" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Gender</label>
              <input type="text" placeholder="Your Gender" />
            </div>
            <div className="form-group">
              <label>House Number</label>
              <input type="text" placeholder="Your House Number" />
            </div>
          </div>
          <div className="email-address-section">
            <h4>My Email Address</h4>
            <div className="email-item">
              <div className="email-icon">📧</div>
              <div className="email-details">
                <p>johndoe@example.com</p>
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

export default ResidentProfile;
