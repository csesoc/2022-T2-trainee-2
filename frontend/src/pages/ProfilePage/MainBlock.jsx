import React from 'react';
import Header from './Header';
import UploadImage from './UploadImage';
import TextInput from './TextInput';
import Tags from './Tags';
import TagsInput from './TagsInput';

export default function MainBlock() {
  return (
    <div className="MainBlock">
      <Header />
      <UploadImage />
      <TextInput />
      <Tags />
      <TagsInput />
    </div>
  );
}
