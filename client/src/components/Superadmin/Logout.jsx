import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Logout.module.css';

const Logout = () => {
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
   
    localStorage.removeItem('authToken'); 
    navigate('/login'); 
  };

  const handleCancel = () => {
    setShowDialog(false); 
  };

  return (
    <div className={styles['logout-container']}>
      <button className={styles['logout-button']} onClick={() => setShowDialog(true)}>Logout</button>

      {showDialog && (
        <div className={styles['dialog-overlay']} onClick={handleCancel}>
          <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
            <p>Are you sure you want to log out?</p>
            <div className={styles['dialog-buttons']}>
              <button className={styles['confirm-button']} onClick={handleLogout}>Yes, Logout</button>
              <button className={styles['cancel-button']} onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
