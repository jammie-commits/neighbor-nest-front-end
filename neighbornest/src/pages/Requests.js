import React, { useState, useEffect } from 'react';
import '../components/adminEvent.css'; // Ensure this path is correct or rename if necessary

function Requests() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/events')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  const handleStatusClick = (eventId, currentStatus) => {
    const newStatus = currentStatus === 'Verified' ? 'Pending' : 'Verified';

    // Update the event status in the state
    const updatedEvents = events.map(event =>
      event.event_id === eventId ? { ...event, status: newStatus } : event
    );
    setEvents(updatedEvents);

    // Send the updated status to the server (simulated)
    fetch(`http://localhost:5001/events/${eventId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: newStatus })
    });
  };

  return (
    <div className="event-list">
      <table>
        <thead>
          <tr>
            <th>Request</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.event_id}>
              <td>{event.title} from {new Date(event.date).toLocaleString()}</td>
              <td>
                <button onClick={() => handleStatusClick(event.event_id, event.status)}>
                  {event.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Requests;
