import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import styles from './ProfilePage.module.css';

function ProfilePage() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    gender: '',
    profileImage: '/path_to_profile_image',
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userProfile')) || {
      fullName: 'John Doe',
      email: 'john@example.com',
      gender: 'Male',
      profileImage: '/path_to_profile_image',
    };
    setProfileData(userData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prevData) => ({
          ...prevData,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    setEditing(false);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles['profile-page']}>
      <div className={styles['profile-card']}>
        <div className={styles['profile-header']}>
          <FontAwesomeIcon icon={faArrowLeft} className={styles['arrow-icon']} onClick={handleBackClick} />
          <img src="/images/White_And_Black_Modern_Abstract_Beauty_Logo-removebg-preview 1 (1).png" alt="Logo" className={styles['profile-logo']} />
          <button className={styles['edit-button']} onClick={() => setEditing(!editing)}>
            {editing ? 'Cancel' : 'Edit'}
          </button>
        </div>
        <div className={styles['profile-info']}>
          <img src={profileData.profileImage} alt="Profile" className={styles['profile-image']} />
          <div className={styles['profile-details']}>
            <h2>{profileData.fullName}</h2>
            <p>{profileData.email}</p>
          </div>
        </div>
        {editing ? (
          <form className={styles['profile-form']} onSubmit={handleSave}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profileData.fullName}
              onChange={handleInputChange}
              placeholder="Your Full Name"
              required
            />
            
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
            />

            <label>Gender</label>
            <select
              name="gender"
              value={profileData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Rather Not Say">Rather Not Say</option>
            </select>

            <label>Upload Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />

            <button type="submit" className={styles['save-button']}>Save</button>
          </form>
        ) : (
          <div className={styles['profile-form']}>
            <label>Full Name</label>
            <input type="text" value={profileData.fullName} placeholder="Your Full Name" readOnly />
            
            <label>Email</label>
            <input type="email" value={profileData.email} placeholder="Your Email" readOnly />

            <label>Gender</label>
            <input type="text" value={profileData.gender} placeholder="Your Gender" readOnly />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
