import React from 'react';
import styles from './StartMatching.module.css';

export default function StartMatching({ onSubmit }) {
  return (
    <button onClick={onSubmit} type="submit" className={styles.StartMatching}>Start Matching</button>
  );
}
