import React, { useState } from 'react';
import '../styles/Topbar.css';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    try {
      const response = await fetch(`/api/search?query=${query}`); // Replace with your search endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchResults([]); // Clear results on error
    }
  };

  return (
    <header className="dashboard-header">
      <div className="header-search-container">
        <input type="text" placeholder="Search..." className="header-search-bar" value={searchQuery} onChange={(e) => handleSearch(e.target.value)} />
        <button type="button" onClick={() => handleSearch(searchQuery)}>Search</button>
        {searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((result) => (
              <div key={result.id} className="search-result">
                {/* Render search result content */}
                {result.title}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="header-profile-notification">
        <Link to="/profile" className="profile-link">
          <div className="header-profile">
            <img src="/path-to-profile-image.png" alt="Profile" />
          </div>
        </Link>
        <Link to="/notifications" className="notification-link">
          <div className="header-notification">
            <img src="/path-to-notification-bell.png" alt="Notifications" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Topbar;