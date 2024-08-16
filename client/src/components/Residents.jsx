import React, { useState, useEffect } from 'react';
import '../styles/Residents.css';

const Residents = () => {
  const [residents, setResidents] = useState([]);
  const [newResident, setNewResident] = useState({
    name: '',
    email: '',
    houseNumber: '',
  });

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const response = await fetch('/https://neighbour-nest.onrender.com/user1212s'); 
        if (!response.ok) {
          throw new Error('Failed to fetch residents');
        }
        const data = await response.json();
        setResidents(data);
      } catch (error) {
        console.error('Error fetching residents:', error);
      }
    };

    fetchResidents();
  }, []);

  const addResident = async () => {
    try {
      const response = await fetch('/api/residents', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newResident),
      });
      if (!response.ok) {
        throw new Error('Failed to add resident');
      }
      const addedResident = await response.json();
      setResidents([...residents, addedResident]);
    } catch (error) {
      console.error('Error adding resident:', error);
    } finally {
      setNewResident({ name: '', email: '', houseNumber: '' });
    }
  };

  return (
    <div className="residents-page">
      <h2>Residents</h2>
      <div className="resident-grid">
        {residents.map(resident => (
          <div key={resident.id} className="resident-card">
            <div className="resident-photo"></div>
            <div className="resident-details">
              <p>Name: {resident.name}</p>
              <p>Email: {resident.email}</p>
              <p>House No: {resident.houseNumber}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="add-resident">
        <h3>Add Resident</h3>
        <input
          type="text"
          placeholder="Name"
          value={newResident.name}
          onChange={(e) => setNewResident({ ...newResident, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newResident.email}
          onChange={(e) => setNewResident({ ...newResident, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="House Number"
          value={newResident.houseNumber}
          onChange={(e) => setNewResident({ ...newResident, houseNumber: e.target.value })}
        />
        <button onClick={addResident}>Add Resident</button>
      </div>
    </div>
  );
};

export default Residents;