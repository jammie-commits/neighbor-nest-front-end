import React, { useState } from 'react';
import ResidentSidebar from '../components/residents/ResidentSidebar';
import Topbar from '../components/Superadmin/Topbar';
import styles from '../components/residents/ResidentActivity.module.css'; // Ensure this path is correct

const ResidentActivity = () => {
  const [newsTitle, setNewsTitle] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [newsList, setNewsList] = useState([]);
  const [eventList, setEventList] = useState([]);

  const handleNewsSubmit = (e) => {
    e.preventDefault();
    const newNews = { title: newsTitle, content: newsContent };
    setNewsList([...newsList, newNews]);
    console.log('News Added:', newNews);
    alert('News added successfully!');
    setNewsTitle('');
    setNewsContent('');
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const newEvent = { title: eventTitle, description: eventDescription };
    setEventList([...eventList, newEvent]);
    console.log('Event Added:', newEvent);
    alert('Event added successfully!');
    setEventTitle('');
    setEventDescription('');
  };

  const handleNewsDelete = (index) => {
    const updatedNewsList = newsList.filter((_, i) => i !== index);
    setNewsList(updatedNewsList);
    console.log('News Deleted:', newsList[index]);
    alert('News deleted successfully!');
  };

  const handleEventDelete = (index) => {
    const updatedEventList = eventList.filter((_, i) => i !== index);
    setEventList(updatedEventList);
    console.log('Event Deleted:', eventList[index]);
    alert('Event deleted successfully!');
  };

  return (
    <div className={styles.activityContainer}>
      <Topbar />
      <ResidentSidebar />
      <div className={styles.activityContent}>
        <div className={styles.eventsContainer}>
          <h3>Add Event</h3>
          <form className={styles.form} onSubmit={handleEventSubmit}>
            <label htmlFor="eventTitle" className="flex-column">Event Title</label>
            <input
              id="eventTitle"
              type="text"
              className={styles.inputForm}
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              placeholder="Enter event title"
            />
            <label htmlFor="eventDescription" className="flex-column">Event Description</label>
            <textarea
              id="eventDescription"
              className={styles.inputForm}
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              placeholder="Enter event description"
            />
            <button type="submit" className={styles.buttonSubmit}>Add Event</button>
          </form>
          <div className={styles.eventList}>
            {eventList.map((event, index) => (
              <div key={index} className={styles.eventItem}>
                <h4>{event.title}</h4>
                <p>{event.description}</p>
                <button onClick={() => handleEventDelete(index)} className={styles.buttonDelete}>Delete</button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.newsContainer}>
          <h3>Add News</h3>
          <form className={styles.form} onSubmit={handleNewsSubmit}>
            <label htmlFor="newsTitle" className="flex-column">News Title</label>
            <input
              id="newsTitle"
              type="text"
              className={styles.inputForm}
              value={newsTitle}
              onChange={(e) => setNewsTitle(e.target.value)}
              placeholder="Enter news title"
            />
            <label htmlFor="newsContent" className="flex-column">News Content</label>
            <textarea
              id="newsContent"
              className={styles.inputForm}
              value={newsContent}
              onChange={(e) => setNewsContent(e.target.value)}
              placeholder="Enter news content"
            />
            <button type="submit" className={styles.buttonSubmit}>Add News</button>
          </form>
          <div className={styles.newsList}>
            {newsList.map((news, index) => (
              <div key={index} className={styles.newsItem}>
                <h4>{news.title}</h4>
                <p>{news.content}</p>
                <button onClick={() => handleNewsDelete(index)} className={styles.buttonDelete}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentActivity;
