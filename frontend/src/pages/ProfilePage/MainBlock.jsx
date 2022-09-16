import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import UploadImage from '../../components/UploadImage/UploadImage';
import TextInput from '../../components/TextInput/TextInput';
import StartMatching from '../../components/StartMatching/StartMatching';

export default function MainBlock() {
  const [selectedImage, setSelectedImage] = useState(null);
  function onSubmit() {
    console.log("hi");
    fetch('http://localhost:8000/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: selectedImage,
        firstName: 'Bob',
        lastName: 'Bob',
        age: '60',
        username: 'bob',
        password: 'bob123',
        description: 'hi im bob',
      }),
    });
  }
  return (
    <div className='MainBlock'>
      <Header title='Tell others about yourself!' />
      <UploadImage
        setSelectedImage={setSelectedImage}
        selectedImage={selectedImage}
      />
      <TextInput />
      <StartMatching onSubmit={onSubmit} />
    </div>
  );
}
