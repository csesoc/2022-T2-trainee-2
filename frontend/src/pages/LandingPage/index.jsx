import React from 'react';
import styles from './LandingPage.module.css';
import Header from '../../components/Header/Header';
import image from '../../images/loginimage.png';
// Login

export default function LandingPage() {
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
      <Header title='swipe and find your new tribe!' />
      <img src={image} style={{ width: '80%', margins: 'auto' }}></img>
      <form onSubmit={onSubmit}>
        <input className={styles.text} type='text' placeholder='username' />
        <br />
        <input className={styles.text} type='password' placeholder='password' />
        <button className={styles.Button} type='submit'>
          {' '}
          Login{' '}
        </button>
      </form>
    </div>
  );
}
