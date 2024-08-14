import React from 'react';
import ResidentSidebar from '../components/residents/ResidentSidebar';
import Topbar from '../components/Superadmin/Topbar';
const ResidentActivity = () => {
  return (
    <div>
     <Topbar/>  
      <ResidentSidebar />

      <div className="activity-content">
      
        <h2>Activity Page</h2>

      </div>
    </div>
  );
};

export default ResidentActivity;
