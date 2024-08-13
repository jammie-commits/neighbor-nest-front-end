import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Signup.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [signupError, setSignupError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!validateEmail(email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    if (!validatePassword(password)) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    setSignupError('');

    try {
      const response = await fetch('https://your-api.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save JWT and user info in localStorage or context
        localStorage.setItem('token', data.token); // Assuming the token is returned as "token"
        localStorage.setItem('user', JSON.stringify(data.user));

        // Redirect to dashboard or any other protected route
        navigate('/dashboard');
      } else {
        // Handle signup errors
        setSignupError(data.message || 'Failed to sign up. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setSignupError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignInClick = () => {
    // Redirect to the login page when the "Sign In" link is clicked
    navigate('/login');
  };

  return (
    <div className='signup-container'>
      <div className='white-and-black-modern' />
      <div className='signup-frame'>
        <div className='frame-1'>
          <div className='icon-pack'>
            <div className='vector' />
          </div>
          <span className='sign-up-2'>Sign Up</span>
          <form onSubmit={handleSubmit}>
            <div className='frame-3'>
              <span className='name'>Name</span>
              <div className='input'>
                <input
                  className='input-4'
                  placeholder='John Doe'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
            </div>
            <div className='frame-5'>
              <span className='email'>Email</span>
              <div className='input-6'>
                <input
                  type='email'
                  className='input-7'
                  placeholder='Enter your email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>
            <div className='frame-8'>
              <div className='frame-9'>
                <span className='password'>Password</span>
              </div>
              <div className='input-a'>
                <input
                  type='password'
                  className='input-field'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>
            </div>
            <div className='group'>
              <div className='agree-terms-policy'>
                <span className='agree-terms-policy-c'>I agree to the </span>
                <Link to="./terms-and-conditions" className='terms-policy-d'>terms and policy</Link>
              </div>
              <div className='signup-rectangle' />
            </div>
            {signupError && <span className="error">{signupError}</span>}
            <button type='submit' className='frame-d' disabled={loading}>
              <div className='button'>
                <span className='contact-us'>{loading ? 'Signing up...' : 'Sign Up'}</span>
              </div>
            </button>
          </form>
          <div className='group-e'>
            <div className='sign-in'>
              <span className='have-account'>Have an account? </span>
              <button onClick={handleSignInClick} className='sign-in-f'>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
