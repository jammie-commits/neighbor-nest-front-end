import React from 'react';
import '../styles/DashboardAdmin.css'; 

import Topbar from '../components/Topbar'; 
import Sidebar from '../components/Sidebar'; 
import ResidentStatusTable from '../components/ResidentStatusTable'; 
import UpcomingEvents from '../components/UpcomingEvents';
import NewsUpdates from '../components/NewsUpdates';

const DashboardAdmin = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="search-bar">
            <i className="fas fa-search"></i>
        </div>
        <div className="content-sections">
          <div className="left-content">
            <ResidentStatusTable />
          </div>

          <div className="right-content">
            <UpcomingEvents />
            <NewsUpdates />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
