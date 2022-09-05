import React from 'react';
import styles from './TextInput.module.css';

export default function TextInput() {
  return (
    <form className={styles.text}>
      <input type='text' placeholder='What is your first name?' />
      <br />
      <input type='text' placeholder='What is your last name?' />
      <br />
      <input type='number' min='13' placeholder='How old are you?' />
      <br />
      <input type='password' placeholder='Choose a secure password.' />
      <br />
      <input type='text' placeholder='Write a short bio about yourself' />
      <br />
      <input placeholder='What are you interests?' />
    </form>
  );
}
