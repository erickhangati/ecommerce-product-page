import React, { useContext } from "react";

import MenuCloseIcon from "../../UI/Icons/MenuCloseIcon";
import CartContext from "../../../context/cart-context";

import styles from "./MobileMenuModal.module.css";

const MobileMenuModal = () => {
  // Importing cart content.
  const cartCtx = useContext(CartContext);

  const menuCloseClickHandler = () => {
    // Change state to close mobile menu.
    cartCtx.setShowMobileMenu(false);
  };

  return (
    <nav className={styles["mobile-menu-modal"]}>
      <MenuCloseIcon onClick={menuCloseClickHandler} />
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default MobileMenuModal;
