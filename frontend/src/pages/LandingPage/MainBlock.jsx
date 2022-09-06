import React from 'react';
import styles from './LandingPage.module.css';
import image from '../../images/loginimage.png';
import Footer from '../../components/Footer/Footer';
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
      <img src={image} style={{ width: '70%', margins: 'auto' }}></img>
      <form onSubmit={onSubmit}>
        <input className={styles.text} type='text' placeholder='username' />
        <br />
        <input className={styles.text} type='password' placeholder='password' />
        <button className={styles.Button} type='submit'>
          {' '}
          Login{' '}
        </button>
      </form>
      <Link to='/profile'>
        <button className={styles.Button} type='submit'>
          {' '}
          Sign Up{' '}
        </button>
      </Link>
    </div>
  );
}
