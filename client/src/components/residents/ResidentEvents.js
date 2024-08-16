import React, { useState, useEffect } from 'react';
import '../components/adminEvent.css'; // Ensure this path is correct

function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5001/events') // Updated to port 5001
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setEvents(data))
      .catch(error => {
        console.error('Fetch error:', error);
        setError('Failed to load events');
      });
  }, []);

  const handleStatusClick = (eventId, currentStatus) => {
    const newStatus = currentStatus === 'Verified' ? 'Pending' : 'Verified';

    // Update the event status in the state
    const updatedEvents = events.map(event =>
      event.event_id === eventId ? { ...event, status: newStatus } : event
    );
    setEvents(updatedEvents);

    // Send the updated status to the server
    fetch(`http://localhost:5001/events/${eventId}`, { // Updated to port 5001
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: newStatus })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update event status');
      }
    })
    .catch(error => console.error('Update error:', error));
  };

  return (
    <div className="event-list">
      <h1>Admin Events</h1> {/* Added a title for clarity */}
      {error && <p>{error}</p>} {/* Display error message if any */}
      <table>
        <thead>
          <tr>
            <th>Request</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 ? (
            events.map(event => (
              <tr key={event.event_id}>
                <td>{event.title} from {new Date(event.date).toLocaleString()}</td>
                <td>
                  <button onClick={() => handleStatusClick(event.event_id, event.status)}>
                    {event.status}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No events found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminEvents;
