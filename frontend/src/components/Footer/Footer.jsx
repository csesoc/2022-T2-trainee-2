import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      Made by{' '}
      <a target='_blank' href='https://github.com/csesoc/2022-T2-trainee-2'>
        Trainee 2 22T2{' '}
      </a>{' '}
      ✌️
    </footer>
  );
};

export default Footer;
