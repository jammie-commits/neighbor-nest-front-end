import React, { useState, useEffect } from 'react';
import '../styles/Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  const handleDismiss = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/notifications');
        if (!response.ok) {
          throw new Error('Failed to fetch notifications');
        }
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="notifications">
      <h1>Notifications</h1>
      <div className="notifications-list">
        {notifications.length === 0 ? (
          <p>No notifications</p>
        ) : (
          notifications.map(notification => (
            <div key={notification.id} className="notification">
              <p>{notification.message}</p>
              <button
                className="dismiss-btn"
                onClick={() => handleDismiss(notification.id)}
              >
                &times;
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;