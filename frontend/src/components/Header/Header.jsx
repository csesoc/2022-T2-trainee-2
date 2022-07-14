import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.Header}>
      <h1 className="text-3xl font-bold underline">Tell others about yourself!</h1>
    </div>
  );
}
