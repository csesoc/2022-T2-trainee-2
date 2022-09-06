import React from 'react';
import styles from './LandingPage.module.css';
import image from '../../images/loginimage.png';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
// Login

export default function MainBlock() {
  function onSubmit() {
    fetch('localhost:8000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        username: 'bob',
        password: 'bob123',
      },
    });
  }
  return (
    <div className={styles.MainBlock}>
      <Header title='swipe, match and vibe with your tribe!' />
      <img
        src={image}
        style={{ width: '64%', marginTop: '20px', marginBottom: '20px' }}
      ></img>
      <form onSubmit={onSubmit}>
        <input className={styles.text} type='text' placeholder='username' />
        <br />
        <input className={styles.text} type='password' placeholder='password' />
      </form>
      <div className='Buttons'>
        <Link to='/matching'>
          <button className={styles.Button} type='submit'>
            {' '}
            Login{' '}
          </button>
        </Link>
        <Link to='/profile'>
          <button className={styles.Button} type='submit'>
            {' '}
            Sign Up{' '}
          </button>
        </Link>
      </div>
    </div>
  );
}
