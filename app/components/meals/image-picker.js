"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  function handlePickClick() {
    imageInputRef.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>no image</p>}
          {pickedImage && (
            <Image src={pickedImage} fill alt="image picked by user" />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpg"
          name={name}
          required
          ref={imageInputRef}
          onChange={handleImageChange}
        ></input>
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          pick an image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
