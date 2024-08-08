import React from 'react';
import './App.css';
import Resident from './pages/Resident';
import NewsCard from './components/NewsCard';
import './components/NewsCard.css';
import SearchBar from './components/SearchBar';

const newsData = [
  {
    title: "Community Cleanup",
    description: "Join us for a community cleanup event this Saturday. Help keep our neighborhood clean and green!",
    imageUrl: "https://images.unsplash.com/photo-1553073520-80b5ad5ec870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D",
    author: "Admin",
    date: "2024-08-08",
  },
  {
    title: "Neighborhood Watch Meeting",
    description: "Attend the upcoming Neighborhood Watch meeting to discuss safety concerns and community issues.",
    imageUrl: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D",
    author: "Admin",
    date: "2024-08-08",
  },
  {
    title: "Local Farmers Market",
    description: "Visit the local farmers market this weekend to support local vendors and get fresh produce.",
    imageUrl: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwY29tbXVuaXR5fGVufDB8fDB8fHww",
    author: "Admin",
    date: "2024-08-08",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div className="App">
      <div className="dashboard">
        <h2>Dashboard</h2>
        <ul className="dashboard-shortcuts">
          <li><a href="/activity">Activity</a></li>
          <li><a href="/submissions">Submissions</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </div>
      <div className="main-content">
        <div className="user-profile-container">
          <span className="user-profile-name">John Rambo</span>
        </div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="news-container">
          <Resident />
          <div className="news-card-container">
            {newsData.map((news, index) => (
              <NewsCard
                key={index}
                title={news.title}
                description={news.description}
                imageUrl={news.imageUrl}
                author={news.author}
                date={news.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
