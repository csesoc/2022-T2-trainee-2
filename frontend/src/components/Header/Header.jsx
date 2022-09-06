import React from 'react';
import styles from './Header.module.css';

export default function Header({ title }) {
  return (
    <div className={styles.Header}>
      <h3 className='text-3xl font-bold underline'>{title}</h3>
    </div>
  );
}
