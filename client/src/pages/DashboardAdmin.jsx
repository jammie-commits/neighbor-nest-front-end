<<<<<<< HEAD
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
=======
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Category from "../components/Category";
import Logout from "../components/Logout";
import Notification from "../components/Notification";
import Profile from "../components/Profile";
import SearchNormal from "../components/SearchNormal";
import Settings from "../components/Settings";
import "../DashboardAdmin.css";
import logo from "../assets/logo.png"

function DashboardAdmin1() {
    return (
    <div className="dashboard-admin">

      
      <div className="div">
        <div className="frame">
          <div className="frame-2">
            <img className="ellipse" alt="Ellipse" src="ellipse-1.png" />
            <div className="group">
              <div className="text-wrapper">Karim Benzema</div>
              <div className="text-wrapper-2">Admin</div>
            </div>
          </div>
          <div className="vuesax-linear-wrapper">
            <Notification className="icon-instance-node" />
          </div>
        </div>
        <div className="group-wrapper">
          <div className="group-2">
            <SearchNormal className="vuesax-linear-search" />
            <div className="text-wrapper-3">Search residents, requests</div>
          </div>
        </div>
        <div className="text-wrapper-4">Tenant</div>
        <div className="text-wrapper-5">Status</div>
        <div className="text-wrapper-6">Neigborhood</div>
        <div className="group-3">
          <div className="group-4">
            <div className="frame-3">
              <div className="element">
                <img className="image" alt="Image" src="image-12.png" />
              </div>
              <div className="text-wrapper-7">Bluenose</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-8">Verified</div>
            </div>
            <div className="text-wrapper-9">Kilimani</div>
          </div>
          <img className="line" alt="Line" src="line-1.svg" />
        </div>
        <div className="group-5">
          <div className="group-4">
            <div className="frame-3">
              <div className="element">
                <img className="image" alt="Image" src="image.png" />
              </div>
              <div className="text-wrapper-7">Bluenose</div>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-10">Unverified</div>
            </div>
            <div className="text-wrapper-9">Kilimani</div>
          </div>
          <img className="line" alt="Line" src="image.svg" />
        </div>
        <div className="group-6">
          <div className="group-4">
            <div className="frame-3">
              <div className="element">
                <img className="image" alt="Image" src="image-12-2.png" />
              </div>
              <div className="text-wrapper-7">Bluenose</div>
            </div>
            <div className="frame-5">
              <div className="text-wrapper-11">Pending</div>
            </div>
            <div className="text-wrapper-9">Kilimani</div>
          </div>
          <img className="line" alt="Line" src="line-1-2.svg" />
        </div>
        <div className="group-7">
          <div className="group-4">
            <div className="frame-3">
              <div className="element">
                <img className="image" alt="Image" src="image-12-3.png" />
              </div>
              <div className="text-wrapper-7">Bluenose</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-8">Verified</div>
            </div>
            <div className="text-wrapper-9">Kilimani</div>
          </div>
          <img className="line" alt="Line" src="line-1-3.svg" />
        </div>
        <div className="group-8">
          <div className="group-4">
            <div className="frame-3">
              <div className="element">
                <img className="image" alt="Image" src="image-12-4.png" />
              </div>
              <div className="text-wrapper-7">Bluenose</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-8">Verified</div>
            </div>
            <div className="text-wrapper-9">Kilimani</div>
          </div>
          <img className="line" alt="Line" src="line-1-4.svg" />
        </div>
        <div className="group-9">
          <div className="group-4">
            <div className="frame-3">
              <div className="element">
                <img className="image" alt="Image" src="image-12-5.png" />
              </div>
              <div className="text-wrapper-7">Bluenose</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-8">Verified</div>
            </div>
            <div className="text-wrapper-9">Kilimani</div>
          </div>
          <img className="line" alt="Line" src="line-1-5.svg" />
        </div>
        <div className="group-10">
          <div className="group-4">
            <div className="frame-3">
              <div className="element">
                <img className="image" alt="Image" src="image-12-6.png" />
              </div>
              <div className="text-wrapper-7">Bluenose</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-8">Verified</div>
            </div>
            <div className="text-wrapper-9">Kilimani</div>
          </div>
          <img className="line" alt="Line" src="line-1-6.svg" />
        </div>
        <div className="group-11">
          <div className="group-4">
            <div className="frame-3">
              <div className="element">
                <img className="image" alt="Image" src="image-12-7.png" />
              </div>
              <div className="text-wrapper-7">Bluenose</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-8">Verified</div>
            </div>
            <div className="text-wrapper-9">Kilimani</div>
          </div>
          <img className="line" alt="Line" src="line-1-7.svg" />
        </div>
        <div className="frame-6">
          <img className="white-and-black" src ={logo} alt = "logo"/>
          <div className="frame-7">
            <div className="frame-8">
              <Settings className="icon-instance-node" />
              <div className="text-wrapper-12">Settings</div>
            </div>
            <div className="frame-9">
              <Logout className="icon-instance-node" />
              <div className="text-wrapper-13">Logout</div>
            </div>
          </div>
          <div className="frame-10">
            <div className="frame-11">
              <Category className="icon-instance-node" />
              <div className="text-wrapper-14">Dashboard</div>
            </div>
            <div className="frame-12">
              <Profile className="icon-instance-node" />
              <div className="text-wrapper-15">Residents</div>
            </div>
            <div className="frame-9">
              <img className="icon-instance-node" alt="Uil message" src="uil-message.png" />
              <div className="text-wrapper-15">Requests</div>
            </div>
          </div>
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper-16">Upcoming Events</div>
          <div className="frame-13">
            <div className="frame-2">
              <div className="element">
                <img className="image" alt="Image" src="image-10.png" />
              </div>
              <div className="text-wrapper-17">Flotsam</div>
            </div>
            <div className="text-wrapper-18">Pool</div>
            <div className="text-wrapper-19">21/03/2092</div>
          </div>
          <div className="frame-14">
            <div className="frame-2">
              <div className="element">
                <img className="image" alt="Image" src="image-10-3.png" />
              </div>
              <div className="text-wrapper-17">Flotsam</div>
            </div>
            <div className="text-wrapper-18">Pool</div>
            <div className="text-wrapper-19">21/03/2092</div>
          </div>
          <div className="frame-15">
            <div className="frame-2">
              <div className="element">
                <img className="image" alt="Image" src="image-10-5.png" />
              </div>
              <div className="text-wrapper-17">Flotsam</div>
            </div>
            <div className="text-wrapper-18">Pool</div>
            <div className="text-wrapper-19">21/03/2092</div>
          </div>
          <div className="frame-16">
            <div className="text-wrapper-20">View all Events</div>
          </div>
        </div>
        <div className="overlap">
          <div className="rectangle" />
          <div className="text-wrapper-16">News Updates</div>
          <div className="frame-13">
            <div className="frame-2">
              <div className="element">
                <img className="image" alt="Image" src="image-10-2.png" />
              </div>
              <div className="text-wrapper-17">Flotsam</div>
            </div>
            <div className="text-wrapper-18">Pool</div>
            <div className="text-wrapper-19">21/03/2092</div>
          </div>
          <div className="frame-14">
            <div className="frame-2">
              <div className="element">
                <img className="image" alt="Image" src="image-10-4.png" />
              </div>
              <div className="text-wrapper-17">Flotsam</div>
            </div>
            <div className="text-wrapper-18">Pool</div>
            <div className="text-wrapper-19">21/03/2092</div>
          </div>
          <div className="frame-15">
            <div className="frame-2">
              <div className="element">
                <img className="image" alt="Image" src="image-10-6.png" />
              </div>
              <div className="text-wrapper-17">Flotsam</div>
            </div>
            <div className="text-wrapper-18">Pool</div>
            <div className="text-wrapper-19">21/03/2092</div>
          </div>
          <div className="frame-17">
            <div className="text-wrapper-20">Read More</div>
>>>>>>> arnold2
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default DashboardAdmin;
=======
export default DashboardAdmin1;
>>>>>>> arnold2
