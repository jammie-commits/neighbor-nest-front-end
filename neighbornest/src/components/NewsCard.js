// src/components/NewsCard.js
import React from 'react';
import './NewsCard.css';

const NewsCard = ({ title, description, imageUrl, author, date }) => {
  return (
    <div className="news-card">
      <img src={imageUrl} alt={title} className="news-card-image" />
      <div className="news-card-content">
        <h2 className="news-card-title">{title}</h2>
        <p className="news-card-description">{description}</p>
        <div className="news-card-footer">
          <span className="news-card-author">By: {author}</span>
          <span className="news-card-date">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
