import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#users">Users</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#settings">Settings</a></li>
          </ul>
        </nav>
        <button className="logout-button">Logout</button>
      </aside>
      <main className="main-content">
        <header className="header">
          <input type="text" placeholder="Search..." />
        </header>
        <section className="section">
          <h2>Dashboard Super Admin 1</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>Active</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </section>
        <section className="section">
          <h2>Dashboard Super Admin 2</h2>
          <div className="cards">
            <div className="card">
              <img src="/path/to/avatar.png" alt="User" />
              <p>User Information</p>
            </div>
            {/* Add more cards as needed */}
          </div>
        </section>
        <section className="section">
          <h2>Dashboard Super Admin 3</h2>
          <div className="images">
            <img src="/path/to/image1.jpg" alt="Image 1" />
            <img src="/path/to/image2.jpg" alt="Image 2" />
            <img src="/path/to/image3.jpg" alt="Image 3" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
