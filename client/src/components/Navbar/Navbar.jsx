import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src="logo.png" alt="Company Logo" />
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
                <div className="login">
                    <a href="#login">Login or Create Account</a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;