/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import Header from '../../components/Header/Header';
import UploadImage from '../../components/UploadImage/UploadImage';
import TextInput from '../../components/TextInput/TextInput';
import Tags from '../../components/Tags/Tags';
import StartMatching from '../../components/StartMatching/StartMatching';
import WeeklyCalendar from '../../components/WeeklyCalendar/WeeklyCalendar';

export default function MainBlock() {
  const [userData, setUserData] = useState({
    firstName: 'Thomas',
    lastName: 'Zhao',
    age: 23,
    username: 'tho0mza',
    password: '14123',
    description: 'hey!1!!!!1!!',
  });

//   const user = new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     age: req.body.age,
//     username: req.body.username,
//     password: req.body.password,
//     description: req.body.description
// })

  const handleClick = () => {
    const url = 'http://localhost:8000/register';
    Axios.post(url, userData).then((err) => { console.log(err.response); });
    console.log(userData);
  };

  return (
    <div className="MainBlock">
      <Header />
      <UploadImage />
      <TextInput userData={userData} setUserData={setUserData}/>
      <Tags />
      <WeeklyCalendar />
      <StartMatching />
      <button type="submit" onClick={() => handleClick()}>Push</button>
    </div>
  );
}
