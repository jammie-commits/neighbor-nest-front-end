import React, { useState } from 'react';
import '../Login.css';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
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
    setLoginError('');

    try {
      const response = await fetch('https://backendapi.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token); 
        localStorage.setItem('user', JSON.stringify(data.user));

        navigate('/dashboard');
      } else {
        setLoginError(data.message || 'Failed to log in. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='main-container'>
      <div className='white-and-black-modern' />
      <div className='frame'>
        <div className='frame-1'>
          <div className='icon-pack'>
            <div className='vector' />
          </div>
          <span className='login'>Login</span>
          <form onSubmit={handleSubmit}>
            <div className='frame-2'>
              <span className='email'>Email</span>
              <div className='input'>
                <input
                  type='email'
                  className='input-3'
                  placeholder='Enter your email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>
            <div className='frame-4'>
              <div className='frame-5'>
                <span className='password'>Password</span>
              </div>
              <div className='input-6'>
                <input
                  type='password'
                  className='input-7'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>
            </div>
            {loginError && <span className="error">{loginError}</span>}
            <button type='submit' className='frame-9' disabled={loading}>
              <div className='button'>
                <span className='contact-us2'>{loading ? 'Logging in...' : 'Log in'}</span>
              </div>
            </button>
          </form>
          <div className='group'>
            <div className='sign-up'>
              <span className='dont-have-account'>Don't have an account? </span>
              <Link to="/signup" className='text-9'>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
