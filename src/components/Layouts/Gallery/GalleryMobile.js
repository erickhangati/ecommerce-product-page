import React, { useState } from "react";

import NextIcon from "../../UI/Icons/NextIcon";
import PreviousIcon from "../../UI/Icons/PreviousIcon";

import Images from "./Images";
import styles from "./GalleryMobile.module.css";

const GalleryMobile = () => {
  const [activeImage, setActiveImage] = useState(Images.full[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextClickHandler = () => {
    // If image is last go back to first image.
    if (activeImageIndex === Images.full.length - 1) {
      setActiveImage(Images.full[0]);
      setActiveImageIndex(0);
      return;
    }

    // Go to next image.
    setActiveImage(Images.full[activeImageIndex + 1]);
    setActiveImageIndex(activeImageIndex + 1);
  };

  const previousClickHandler = () => {
    // If image is first go to last image.
    if (activeImageIndex === 0) {
      setActiveImage(Images.full[Images.full.length - 1]);
      setActiveImageIndex(Images.full.length - 1);
      return;
    }

    // Go to previous image.
    setActiveImage(Images.full[activeImageIndex - 1]);
    setActiveImageIndex(activeImageIndex - 1);
  };

  return (
    <div className={styles["gallery-mobile"]}>
      {/* Render image. */}
      <img src={activeImage} alt="product" />

      {/* Render next button */}
      <button className={styles["button-next"]} onClick={nextClickHandler}>
        <NextIcon />
      </button>

      {/* Render previous button */}
      <button
        className={styles["button-previous"]}
        onClick={previousClickHandler}
      >
        <PreviousIcon />
      </button>
    </div>
  );
};

export default GalleryMobile;
