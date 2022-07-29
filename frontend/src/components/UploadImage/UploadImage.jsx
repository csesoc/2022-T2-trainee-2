import React, { useState } from 'react';
import styles from './UploadImage.module.css';

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className={styles.UploadImage}>
      <div>Upload Profile Photo</div>
      {selectedImage && (
        <div>
          <img alt="not fount" width="250px" src={URL.createObjectURL(selectedImage)} />
          <br />
          <button type="button" onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadImage;
