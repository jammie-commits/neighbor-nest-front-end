// src/components/residents/EventCard.js
import React from 'react';
import styles from './EventCard.module.css'; // Import the CSS module

const EventCard = ({ events }) => {
  return (
    <div className={styles.eventCardsContainer}>
      {events.map(event => (
        <div key={event.event_id} className={styles.card}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <div className={styles.goCorner}>
            <span className={styles.goArrow}>→</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
