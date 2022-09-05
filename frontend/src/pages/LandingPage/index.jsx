import React from 'react';
import styles from './LandingPage.module.css';
import Header from '../../components/Header/Header';
// Login

export default function LandingPage() {
  return (
    <div className={styles.MainBlock}>
      <Header title='Find your people on Groupr!' />
      <form>
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
