// src/App.js
import './App.css';
import Resident from './pages/Resident';
import NewsCard from './components/NewsCard';
import './components/NewsCard.css';

function App() {
  return (
    <div className="App">
      <Resident />
      <div className="news-card-container">
        <NewsCard
          title="Community Garden Reopened!"
          description="The community garden has reopened for residents. Come and enjoy the fresh air and greenery. Let's work together to maintain it."
          imageUrl="https://via.placeholder.com/300"
          author="Admin Alice"
          date="August 8, 2024"
        />
        <NewsCard
          title="Neighborhood Block Party"
          description="Join us this weekend for a neighborhood block party. Fun activities, food, and music await! All residents are welcome."
          imageUrl="https://via.placeholder.com/300"
          author="Admin Bob"
          date="August 7, 2024"
        />
        <NewsCard
          title="New Playground Equipment Installed"
          description="New playground equipment has been installed at the park. Bring your kids and check out the new swings and slides!"
          imageUrl="https://via.placeholder.com/300"
          author="Admin Carol"
          date="August 6, 2024"
        />
      </div>
    </div>
  );
}

export default App;
