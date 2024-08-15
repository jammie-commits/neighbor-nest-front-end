import React, { useState, useEffect } from 'react';
import '../styles/Requests.css';

const Requests = () => {
  const [requests, setRequests] = useState([]);

  const handleRequest = (id, action) => {
    setRequests(
      requests.map(req =>
        req.id === id ? { ...req, status: action === 'approve' ? 'Approved' : 'Rejected' } : req
      )
    );
  };

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('/api/requests');
        if (!response.ok) {
          throw new Error('Failed to fetch requests');
        }
        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="requests-page">
      <h2>Requests</h2>
      <div className="request-list">
        {requests.map(request => (
          <div key={request.id} className="request-card">
            <p><strong>Type:</strong> {request.type}</p>
            <p><strong>Description:</strong> {request.description}</p>
            <p><strong>Status:</strong> {request.status}</p>
            {request.status === 'Pending' && (
              <div className="request-actions">
                <button onClick={() => handleRequest(request.id, 'approve')}>Approve</button>
                <button onClick={() => handleRequest(request.id, 'reject')}>Reject</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;