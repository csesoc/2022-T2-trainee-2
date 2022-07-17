import React from 'react';
import styles from './Tag.module.css';

export default function Tag(props) {
  return (
    <span className={styles.Tag}>
      {props.name}
    </span>
  );
}
