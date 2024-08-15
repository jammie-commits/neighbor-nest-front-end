import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/LandingPage.css'

function HeroSection() {
  return (
    <section className="hero-section">
      <div>
        <div className="text-content">
          <h1 className="tagline">Connecting Hearts and Homes</h1>
          <h2 className="subheadline">Empowering neighbors to come together, create lasting memories, and stay informed about the latest local happenings through shared events and news.</h2>
          <button className='herosection-button'>
            <Link to="/login" className='get-started'>
              Get Started
            </Link>
          </button>
        </div>
        <div>
          <div className="rectangle rectangle-hs-1" />
          <div className="rectangle rectangle-hs-2" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection