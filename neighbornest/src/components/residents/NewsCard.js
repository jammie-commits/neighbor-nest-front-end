// components/residents/NewsCard.js
import React, { useEffect, useState } from 'react';
import styles from './NewsCard.module.css'; // Import the CSS module

const NewsCard = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:3001/news');
        const data = await response.json();
        setNewsItems(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className={styles.newsCardsContainer}>
      {newsItems.map(news => (
        <div key={news.news_id} className={styles.card}>
          <img src={news.image_url} alt={news.title} className={styles.cardImage} />
          <h3>{news.title}</h3>
          <p>{news.content}</p>
          <div className={styles.goCorner}>
            <span className={styles.goArrow}>→</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
