import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EventList from './components/EventList';
import NewsList from './components/NewsList';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={EventList} />
          <Route path="/news" component={NewsList} />
          <Route path="/dashboard" component={UserDashboard} />
          <Route path="/admin" component={AdminDashboard} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
