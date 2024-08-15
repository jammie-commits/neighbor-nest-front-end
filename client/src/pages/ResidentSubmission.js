import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentSidebar from '../components/residents/ResidentSidebar';
import Topbar from '../components/Superadmin/Topbar';
import styles from '../components/residents/ResidentSubmission.module.css';

const ResidentSubmission = () => {
  const [eventRequests, setEventRequests] = useState([]);

  // Fetch event requests from the backend
  useEffect(() => {
    axios.get('http://localhost:3001/events')
      .then(response => setEventRequests(response.data))
      .catch(error => console.error('Error fetching event requests:', error));
  }, []);

  return (
    <div>
      <Topbar />
      <ResidentSidebar />

      <div className={styles.submissionContainer}>
      <div className={styles.headerRow}>
          <h2>Event Requests</h2>
          <h2>Status</h2>
        </div>
        <div className={styles.eventList}>
          {eventRequests.map(event => (
            <div key={event.event_id} className={styles.eventItem}>
              <p>{event.description}</p>
              <button className={styles.statusButton}>
                {event.status}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResidentSubmission;
