import React from 'react';
import Header from '../../components/Header/Header';
import UploadImage from '../../components/UploadImage/UploadImage';
import TextInput from '../../components/TextInput/TextInput';
import Tags from '../../components/Tags/Tags';


export default function MainBlock() {
  return (
    <div className="MainBlock">
      <Header />
      <UploadImage />
      <TextInput />
      <Tags />
    </div>
  );
}
