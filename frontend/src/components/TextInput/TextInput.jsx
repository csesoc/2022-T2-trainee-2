import React from 'react';
import styles from './TextInput.module.css';

export default function TextInput({ userData, setUserData }) {

  const onChangeHandler = e => {
    const {id, value} = e.target;

    setUserData({
      ...userData,
      [id]: value
    })
  };

  return (
    <div className={styles.text}>
      <input 
        value={userData.firstName}
        id="firstName"
        onChange={onChangeHandler} />
      <br />
      <input placeholder="Write a short bio about yourself" />
      <br />
      <input placeholder="What are you interests?" />
    </div>
  );
}
