import React, { useState } from "react";

import CartContext from "./cart-context";
import Images from "../components/Layouts/Gallery/Images";

const cartContext = {
  items: {},
  setItems: () => {},
  quantity: 0,
  setQuantity: () => {},
  cartQuantity: 0,
  setCartQuantity: () => {},
  productImage: "",
  setProductImage: () => {},
  activeImageIndex: 0,
  setActiveImageIndex: () => {},
  setShowMobileMenu: () => {},
  setShowGalleryModal: () => {},
};

const CartProvider = (props) => {
  const [productImage, setProductImage] = useState(Images.full[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [items, setItems] = useState({ quantity: 0 });
  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [showCartHover, setShowCartHover] = useState(false);

  return (
    <CartContext.Provider
      value={{
        ...cartContext,
        quantity: quantity,
        setQuantity: setQuantity,
        cartQuantity: cartQuantity,
        setCartQuantity: setCartQuantity,
        items: items,
        setItems: setItems,
        productImage: productImage,
        setProductImage: setProductImage,
        activeImageIndex: activeImageIndex,
        setActiveImageIndex: setActiveImageIndex,
        setShowMobileMenu: props.setShowMobileMenu,
        setShowGalleryModal: props.setShowGalleryModal,
        showCartHover: showCartHover,
        setShowCartHover: setShowCartHover,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
