import React from 'react';
import Tag from '../Tag/Tag';
import styles from './Tags.module.css';

export default function Tags() {
  return (
    <div className={styles.Tags}>
      <Tag name="csesoc" />
      <Tag name="rockclimbing" />
      <Tag name="fishing" />
      <Tag name="COMP6080" />
      <Tag name="badminton" />
    </div>
  );
}
