import React from 'react';
import ResidentSidebar from '../components/residents/ResidentSidebar';
//import './Sidebar.css';
import Topbar from '../components/Superadmin/Topbar';

const ResidentSubmission = () => {
  return (
    <div>
      <Topbar/>
      <ResidentSidebar />
    </div>
  );
}

export default ResidentSubmission;
