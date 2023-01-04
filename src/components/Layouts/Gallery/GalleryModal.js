import React, { useState, useContext } from "react";

import CartContext from "../../../context/cart-context";
import CloseIcon from "../../UI/Icons/CloseIcon";
import NextIcon from "../../UI/Icons/NextIcon";

import styles from "./GalleryModal.module.css";
import Images from "./Images";
import PreviousIcon from "../../UI/Icons/PreviousIcon";

const GalleryModal = () => {
  const cartCtx = useContext(CartContext);

  const [productImage, setProductImage] = useState(cartCtx.productImage);

  const galleryModalClickHandler = () => {
    // Hide cart by clicking backdrop modal.
    cartCtx.setShowGalleryModal(false);
  };

  const thumbnailClickHandler = (index) => {
    // Select full image.
    setProductImage(Images.full[index]);
    cartCtx.setActiveImageIndex(index);
  };

  const previousClickHandler = () => {
    // If image is first go to last image.
    if (cartCtx.activeImageIndex === 0) {
      cartCtx.setActiveImageIndex(Images.full.length - 1);
      setProductImage(Images.full[Images.full.length - 1]);
      return;
    }

    // Go to previous image.
    cartCtx.setActiveImageIndex(cartCtx.activeImageIndex - 1);
    setProductImage(Images.full[cartCtx.activeImageIndex - 1]);
  };

  const nextClickHandler = () => {
    // If image is last go back to first image.
    if (cartCtx.activeImageIndex === Images.full.length - 1) {
      cartCtx.setActiveImageIndex(0);
      setProductImage(Images.full[0]);
      return;
    }

    // Go to next image.
    cartCtx.setActiveImageIndex(cartCtx.activeImageIndex + 1);
    setProductImage(Images.full[cartCtx.activeImageIndex + 1]);
  };

  return (
    <div className={styles["gallery-modal"]}>
      <div className={styles["product-image"]}>
        {/* Render modal close icon */}
        <CloseIcon onClick={galleryModalClickHandler} />

        {/* Render full image */}
        <img src={productImage} alt="product" />

        {/* Render previous button */}
        <button
          className={styles["button-previous"]}
          onClick={previousClickHandler}
        >
          <PreviousIcon />
        </button>

        {/* Render next button */}
        <button className={styles["button-next"]} onClick={nextClickHandler}>
          <NextIcon />
        </button>
      </div>

      {/* Render thumbnails */}
      <div className={styles.thumbnails}>
        {Images.thumbNails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt="thumbnail"
            onClick={thumbnailClickHandler.bind(null, index)}
            className={
              cartCtx.activeImageIndex === index
                ? styles["active-thumbnail"]
                : ""
            }
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryModal;
