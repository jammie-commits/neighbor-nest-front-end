import React from 'react';
import '../styles/LandingPage.css';

export default function Main() {
  return (
    <div className='footer-container'>
      <div className='footer-frame-1'>
        <span className='footer-contacts'>Contacts</span>
        <div className='footer-frame-2'>
          <div className='footer-frame-3'>
            <div className='social-network'>
              <div className='footer-vector' />
            </div>
            <span className='phone-number'>(334) 202-4792</span>
          </div>
          <div className='footer-frame-4'>
            <div className='social-network-5'>
              <div className='instagram' />
            </div>
            <span className='nature-pro'>@nature.pro</span>
          </div>
          <div className='footer-frame-6'>
            <div className='footer-icon-pack'>
              <div className='footer-vector-7' />
            </div>
            <span className='email'>haddawy@comcast.net</span>
          </div>
        </div>
      </div>
      <div className='footer-frame-8'>
        <div className='footer-frame-9'>
          <span className='footer-address'>
            998 Devonshire Ave.Camp Hill, PA 17011
          </span>
          <span className='location'>Johannesburg, South Africa</span>
        </div>
      </div>
    </div>
  );
}
