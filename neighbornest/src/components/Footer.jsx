import React from 'react';
import '../App.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='frame-1'>
        <span className='contacts'>Contacts</span>
        <div className='frame-2'>
          <div className='frame-3'>
            <div className='social-network'>
              <div className='vector' />
            </div>
            <span className='phone-number'>(334) 202-4792</span>
          </div>
          <div className='frame-4'>
            <div className='social-network-5'>
              <div className='instagram' />
            </div>
            <span className='nature-pro'>@nature.pro</span>
          </div>
          <div className='frame-6'>
            <div className='icon-pack'>
              <div className='vector-7' />
            </div>
            <span className='email'>haddawy@comcast.net</span>
          </div>
        </div>
      </div>
      <div className='frame-8'>
        <div className='frame-9'>
          <span className='address'>
            998 Devonshire Ave.Camp Hill, PA 17011
          </span>
          <span className='location'>Johannesburg, South Africa</span>
        </div>
      </div>
    </div>
  );
}
