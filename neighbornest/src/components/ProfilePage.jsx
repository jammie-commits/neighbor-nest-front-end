import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

function ProfilePage() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    gender: '',
    profileImage: '/path_to_profile_image',
    phone: '',
    address: '',
  });
  const [editing, setEditing] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" onClick={handleBackClick} /> {/* Add the arrow icon here */}
          <img src="/images/White_And_Black_Modern_Abstract_Beauty_Logo-removebg-preview 1 (1).png" alt="Logo" className="profile-logo" />
          <button className="edit-button" onClick={() => setEditing(!editing)}>
            {editing ? 'Cancel' : 'Edit'}
          </button>
        </div>
        <div className="profile-info">
          <img src={profileData.profileImage} alt="Profile" className="profile-image" />
          <div className="profile-details">
            <h2>{profileData.fullName}</h2>
            <p>{profileData.email}</p>
          </div>
        </div>
        {editing ? (
          <form className="profile-form">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profileData.fullName}
              onChange={handleInputChange}
              placeholder="Your Full Name"
            />
            
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
            />

            <label>Gender</label>
            <input
              type="text"
              name="gender"
              value={profileData.gender}
              onChange={handleInputChange}
              placeholder="Your Gender"
            />

            <div className="email-section">
              <h3>My Email Address</h3>
              <p className="email-item">{profileData.email}</p>
              <button type="button" className="add-email-button">+ Add Email Address</button>
            </div>

            <button type="submit" className="save-button">Save</button>
          </form>
        ) : (
          <div className="profile-form">
            <label>Full Name</label>
            <input type="text" value={profileData.fullName} placeholder="Your Full Name" />
            
            <label>Email</label>
            <input type="email" value={profileData.email} placeholder="Your Email" />

            <label>Gender</label>
            <input type="text" value={profileData.gender} placeholder="Your Gender" />

            <div className="email-section">
              <h3>My Email Address</h3>
              <p className="email-item">{profileData.email}</p>
              <p className="email-time">1 month ago</p>
              <button type="button" className="add-email-button">+ Add Email Address</button>
            </div>
          </div>
        )}
      </div>

      <div className="contacts">
        <h3>Contacts</h3>
        <p><strong>Phone:</strong> {profileData.phone}</p>
        <p><strong>Email:</strong> {profileData.email}</p>
        <p><strong>Address:</strong> {profileData.address}</p>
      </div>
    </div>
  );
}

export default ProfilePage;

