import React from 'react';
import ResidentSidebar from '../components/residents/ResidentSidebar';
import NewsCard from '../components/residents/NewsCard';
import Topbar from '../components/Superadmin/Topbar';

const ResidentDashboard = () => {
  return (
    <div>
      <Topbar/>
      <ResidentSidebar />
      <div className="dashboard-content">
        <h2>Latest News</h2>
        <NewsCard />
      </div>
    </div>
  );
};

export default ResidentDashboard;
