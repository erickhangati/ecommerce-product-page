import React from "react";

import Container from "../UI/Container/Container";
import Gallery from "./Gallery/Gallery";
import GalleryMobile from "./Gallery/GalleryMobile";

import styles from "./CartPage.module.css";
import ProductDetails from "./Details/ProductDetails";

const CartPage = () => {
  return (
    <Container className={styles["cart-page"]}>
      {/* Render Gallery Component */}
      <Gallery />

      {/* Render Mobile Gallery Component */}
      <GalleryMobile />

      {/* RenderProduct Details Component */}
      <ProductDetails />
    </Container>
  );
};

export default CartPage;
