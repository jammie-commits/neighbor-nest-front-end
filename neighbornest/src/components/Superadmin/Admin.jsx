import React from 'react';
import './Admin.css';

const Admin = () => {
    return (
        <div className="admin">
            <div className="user-cards">
                <div className="user-card">
                    <img src={`${process.env.PUBLIC_URL}/images/Frame 29.png`} alt="User" />
                    <h3>John Doe</h3>
                    <p>john@example.com</p>
                </div>
                <div className="user-card">
                    <img src={`${process.env.PUBLIC_URL}/images/Frame 29.png`} alt="User" />
                    <h3>Jane Smith</h3>
                    <p>jane@example.com</p>
                </div>
                <div className="user-card">
                    <img src={`${process.env.PUBLIC_URL}/images/Frame 29.png`} alt="User" />
                    <h3>Michael Brown</h3>
                    <p>michael@example.com</p>
                </div>
                <div className="user-card">
                    <img src={`${process.env.PUBLIC_URL}/images/Frame 29.png`} alt="User" />
                    <h3>Emily Davis</h3>
                    <p>emily@example.com</p>
                </div>
                <div className="user-card">
                    <img src={`${process.env.PUBLIC_URL}/images/Frame 29.png`} alt="User" />
                    <h3>Sarah Wilson</h3>
                    <p>sarah@example.com</p>
                </div>
                <div className="user-card">
                    <img src={`${process.env.PUBLIC_URL}/images/Frame 29.png`} alt="User" />
                    <h3>David Johnson</h3>
                    <p>david@example.com</p>
                </div>
                
            </div>
        </div>
    );
};

export default Admin;
