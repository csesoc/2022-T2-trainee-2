import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import UploadImage from '../../components/UploadImage/UploadImage';
import TextInput from '../../components/TextInput/TextInput';
import Tags from '../../components/Tags/Tags';
import StartMatching from '../../components/StartMatching/StartMatching';
import WeeklyCalendar from '../../components/WeeklyCalendar/WeeklyCalendar';

export default function MainBlock() {
  const [selectedImage, setSelectedImage] = useState(null);
  function onSubmit() {
    fetch("localhost:8000/register", { 
      method: "POST",
      headers: {
        Accept: 'application/json',
       'Content-Type': 'application/json',
      },
      body: { image: JSON.stringify(selectedImage),
        firstName: "Bob",
        lastName: "Bob",
        age: "60",
        username: "bob",
        password: "bob123",
        description: "hi im bob",
        } 
    })
  }
  return (
    <div className="MainBlock">
      <Header />
      <UploadImage setSelectedImage={setSelectedImage} selectedImage={selectedImage} />
      <TextInput />
      <Tags />
      <WeeklyCalendar />
      <StartMatching onSubmit={onSubmit}/>
    </div>
  );
}