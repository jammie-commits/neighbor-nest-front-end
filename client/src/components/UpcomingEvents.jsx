import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UpcomingEvents.css';

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events">
      <h3>Upcoming Events</h3>
      <Link to="/events">
        <button>View More</button>
      </Link>
      <ul>
        <li>Community BBQ - Aug 20</li>
        <li>Neighborhood Cleanup - Aug 25</li>
      </ul>
    </div>
  );
};

export default UpcomingEvents;