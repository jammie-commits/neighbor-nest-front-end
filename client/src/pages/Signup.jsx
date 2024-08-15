import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import '../styles/Signup.css';
=======
import '../Signup.css';
>>>>>>> arnold2

export default function Signup() {
  return (
    <div className='signup-container'>
      <div className='white-and-black-modern' />
      <div className='signup-frame'>
        <div className='frame-1'>
          <div className='icon-pack'>
            <div className='vector' />
          </div>
          <span className='sign-up-2'>Sign Up</span>
          <div className='frame-3'>
            <span className='name'>Name</span>
            <div className='input'>
              <input className='input-4' />
              <span className='enter-email-address'>John Doe</span>
            </div>
          </div>
          <div className='frame-5'>
            <span className='email'>Email</span>
            <div className='input-6'>
              <input className='input-7' />
              <span className='email-input'>Enter your email address</span>
            </div>
          </div>
          <div className='frame-8'>
            <div className='frame-9'>
              <span className='password'>Password</span>
            </div>
            <div className='input-a'>
              <input className='input-field' />
              <span className='password-input-b'>Enter your password</span>
            </div>
            <div className='group'>
              <div className='agree-terms-policy'>
                <span className='agree-terms-policy-c'>I agree to the </span>
                <Link to="./terms-and-conditions" className='terms-policy-d'>terms and policy</Link>
              </div>
              <div className='signup-rectangle' />
            </div>
          </div>
          <button className='frame-d'>
            <div className='button'>
              <span className='contact-us'>Sign Up</span>
            </div>
          </button>
          <div className='group-e'>
            <div className='sign-in'>
              <span className='have-account'>Have an account? </span>
              <Link to="/login" className='sign-in-f'>Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
