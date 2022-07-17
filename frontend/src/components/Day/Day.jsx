import React from 'react';
import styles from './Day.module.css';

export default function Day(props) {
  return (
    <div>
      <div className={styles.dot} />
      <p>{props.day}</p>
    </div>
  );
}
