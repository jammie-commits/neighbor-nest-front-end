import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentSidebar from '../components/residents/ResidentSidebar';
import Topbar from '../components/Superadmin/Topbar';
import NewsCard from '../components/residents/NewsCard';
import EventCard from '../components/residents/EventCard'; // Import the new EventCard component
import styles from '../components/residents/ResidentDashboard.module.css'; // Create this CSS module for styling

const ResidentDashboard = () => {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsResponse = await axios.get('http://localhost:3001/news');
        setNews(newsResponse.data);

        const eventsResponse = await axios.get('http://localhost:3001/events');
        setEvents(eventsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <Topbar />
      <ResidentSidebar />
      <div className={styles.dashboardContent}>
        <div className={styles.newsSection}>
          <h2>Latest News</h2>
          <NewsCard newsItems={news} />
        </div>

        <div className={styles.eventsSection}>
          <h2>Upcoming Events</h2>
          <EventCard events={events} />
        </div>
      </div>
    </div>
  );
};

export default ResidentDashboard;
