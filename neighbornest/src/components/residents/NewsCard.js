import React, { useEffect, useState } from 'react';
import './NewsCard.css';

function NewsCard() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/news')
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="news-cards-container">
      {news.map((item) => (
        <div key={item.news_id} className="news-card">
          <img src={item.image_url} alt={item.title} className="news-card-image" />
          <div className="news-card-content">
            <h3 className="news-card-title">{item.title}</h3>
            <p className="news-card-description">{item.content}</p>
            <p className="news-card-author">Author ID: {item.user_id}</p>
            <p className="news-card-date">Date: {item.created_at}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsCard;
