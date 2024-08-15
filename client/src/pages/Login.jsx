import React from 'react';
import '../Login.css';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className='main-container'>
      <div className='white-and-black-modern' />
      <div className='frame'>
        <div className='frame-1'>
          <div className='icon-pack'>
            <div className='vector' />
          </div>
          <span className='login'>Login</span>
          <div className='frame-2'>
            <span className='email'>Email</span>
            <div className='input'>
              <input type='email' className='input-3' placeholder='Enter your email address' />
            </div>
          </div>
          <div className='frame-4'>
            <div className='frame-5'>
              <span className='password'>Password</span>
            </div>
            <div className='input-6'>
              <input type='password' className='input-7' placeholder='Enter your password' />
            </div>
          </div>
          <button className='frame-9'>
            <div className='button'>
              <span className='contact-us2'>Log in</span>
            </div>
          </button>
          <div className='group'>
            <div className='sign-up'>
              <span className='dont-have-account'>Don’t have an account? </span>
              <Link to="/signup" className='text-9'>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
