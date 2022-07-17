import React from 'react';
import styles from './Day.module.css';

export default function Day({ days }) {
  return (
    <div>
      <div className={styles.dot} />
      <p>{days}</p>
    </div>
  );
}
