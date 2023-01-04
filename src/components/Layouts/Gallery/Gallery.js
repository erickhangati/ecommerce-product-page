import React, { useState, useContext } from "react";

import CartContext from "../../../context/cart-context";

import styles from "./Gallery.module.css";
import Images from "./Images";

const Gallery = () => {
  const cartCtx = useContext(CartContext);

  const [productImage, setProductImage] = useState(Images.full[0]);
  const [activeProduct, setActiveProduct] = useState(0);

  const thumbnailClickHandler = (index) => {
    // Set full image state.
    setProductImage(Images.full[index]);

    // Set active product.
    setActiveProduct(index);

    // Set full image global state.
    cartCtx.setProductImage(Images.full[index]);

    // Set global active product.
    cartCtx.setActiveImageIndex(index);
  };

  const productImageClickHandler = () => {
    // Show gallery modal.
    cartCtx.setShowGalleryModal(true);
  };

  return (
    <div className={styles.left}>
      {/* Render full image */}
      <img
        className={styles["product-image"]}
        src={productImage}
        alt="product"
        onClick={productImageClickHandler}
      />

      {/* Render thumbnails */}
      <div className={styles.thumbnails}>
        {Images.thumbNails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt="thumbnail"
            onClick={thumbnailClickHandler.bind(null, index)}
            className={
              activeProduct === index ? `${styles["active-thumb"]}` : ""
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
