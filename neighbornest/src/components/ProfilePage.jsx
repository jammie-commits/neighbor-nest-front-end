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

  const handleAddEmailClick = () => {
    // Placeholder function for adding another email
    alert('Add Email Address button clicked');
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileData((prevData) => ({
          ...prevData,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" onClick={handleBackClick} />
          <img src={profileData.profileImage} alt="Profile" className="profile-image" />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageChange}
            style={{ display: editing ? 'block' : 'none' }}
          />
          <button className="edit-button" onClick={() => setEditing(!editing)}>
            {editing ? 'Cancel' : 'Edit'}
          </button>
        </div>
        <div className="profile-info">
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
              <button
                type="button"
                className="add-email-button"
                onClick={handleAddEmailClick}
              >
                + Add Email Address
              </button>
            </div>

            <button type="submit" className="save-button">Save</button>
          </form>
        ) : (
          <div className="profile-form">
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
              <button
                type="button"
                className="add-email-button"
                onClick={handleAddEmailClick}
              >
                + Add Email Address
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
