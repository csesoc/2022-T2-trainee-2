import React from 'react';
import styles from './TextInput.module.css';

export default function TextInput() {
  return (
    <div className={styles.text}>
      <input placeholder="What should we call you?" />
      <br />
      <input placeholder="Write a short bio about yourself" />
      <br />
      <input placeholder="What are you interests?" />
    </div>
  );
}
