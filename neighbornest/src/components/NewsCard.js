// src/components/NewsCard.js
import React from 'react';
import './NewsCard.css';

function NewsCard({ title, description, imageUrl, author, date }) {
  return (
    <div className="news-card">
      <img src={imageUrl} alt={title} className="news-card-image" />
      <div className="news-card-content">
        <h3 className="news-card-title">{title}</h3>
        <p className="news-card-description">{description}</p>
        <p className="news-card-author">By {author}</p>
        <p className="news-card-date">{date}</p>
      </div>
    </div>
  );
}

export default NewsCard;
