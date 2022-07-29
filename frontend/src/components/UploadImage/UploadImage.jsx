import React, { useState } from 'react';
import styles from './UploadImage.module.css';

const UploadImage = ({ setSelectedImage, selectedImage } ) => {
  const [displayImage, setDisplayImage] = useState(null);

  return (
    <div className={styles.UploadImage}>
      <div>Upload Profile Photo</div>
      {selectedImage && (
        <div>
          <img alt="not fount" width="250px" src={URL.createObjectURL(displayImage)} />
          <br />
          <button type="button" onClick={() => setDisplayImage(null)}>Remove</button>
        </div>
      )}
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          let reader = new FileReader()
          reader.readAsDataURL(event.target.files[0])

          reader.onload = () => {      
            setSelectedImage(reader.result)
          }
          setDisplayImage(event.target.files[0])
        }}
      />
    </div>
  );
};

export default UploadImage;
