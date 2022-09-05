import React from 'react';
import styles from './TextInput.module.css';
import Tags from '../Tags/Tags';

export default function TextInput() {
  return (
    <form>
      <input
        className={styles.text}
        type='text'
        placeholder='What is your first name?'
      />
      <br />
      <input
        className={styles.text}
        type='text'
        placeholder='What is your last name?'
      />
      <br />
      <input
        className={styles.text}
        type='number'
        min='13'
        placeholder='How old are you?'
      />
      <br />
      <input
        className={styles.text}
        type='password'
        placeholder='Choose a secure password.'
      />
      <br />
      <input
        className={styles.text}
        type='text'
        placeholder='Write a short bio about yourself'
      />
      <Tags />
    </form>
  );
}
