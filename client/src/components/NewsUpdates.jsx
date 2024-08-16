import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NewsUpdates.css';

const NewsUpdates = () => {
  return (
    <div className="news-updates">
      <h3>News Updates</h3>
      <Link to="/news">
        <button>View More</button>
      </Link>
      <ul>
        <li>Road Closure - Aug 18</li>
        <li>New Park Opening - Aug 30</li>
      </ul>
    </div>
  );
};

export default NewsUpdates;