import React from "react";

const CartContext = React.createContext({
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
  isMobile: false,
  setIsMobile: () => {},
  showMobileMenu: () => {},
  setShowGalleryModal: () => {},
});

export default CartContext;
