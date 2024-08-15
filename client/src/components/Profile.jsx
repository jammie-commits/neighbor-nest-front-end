import React, { useState } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    photo: '/path-to-photo.png', 
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    gender: 'Male',
    neighborhood: 'Downtown',
    houseNumber: '101'
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      });
      if (!response.ok) {
        throw new Error('Failed to save profile');
      }
      const updatedProfile = await response.json();
      setProfile(updatedProfile);
      setIsEditing(false); 
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="profile-info">
        <img src={profile.photo} alt="Profile" className="profile-photo" />
        <div className="profile-details">
          {isEditing ? (
            <>
              <label>
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  value={profile.fullName}
                  onChange={handleChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Gender:
                <input
                  type="text"
                  name="gender"
                  value={profile.gender}
                  onChange={handleChange}
                />
              </label>
              <label>
                Neighborhood:
                <input
                  type="text"
                  name="neighborhood"
                  value={profile.neighborhood}
                  onChange={handleChange}
                />
              </label>
              <label>
                House Number:
                <input
                  type="text"
                  name="houseNumber"
                  value={profile.houseNumber}
                  onChange={handleChange}
                />
              </label>
            </>
          ) : (
            <>
              <p><strong>Full Name:</strong> {profile.fullName}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Gender:</strong> {profile.gender}</p>
              <p><strong>Neighborhood:</strong> {profile.neighborhood}</p>
              <p><strong>House Number:</strong> {profile.houseNumber}</p>
            </>
          )}
        </div>
      </div>
      <div className="profile-buttons">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Profile;