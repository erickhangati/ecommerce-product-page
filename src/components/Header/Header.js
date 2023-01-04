import React, { useContext } from "react";

import Navigation from "./Navigation/Navigation";
import Cart from "./Cart/Cart";
import MenuIcon from "../UI/Icons/MenuIcon";
import CartContext from "../../context/cart-context";

import styles from "./Header.module.css";
import avator from "../../images/image-avatar.png";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const menuIconClickHandler = () => {
    // Set show mobile menu to be visible.
    cartCtx.setShowMobileMenu(true);
  };

  const cartClickHandler = () => {
    // Toggle to show cart.
    props.setShowCartHover(!props.showCartHover);
  };

  return (
    <header className={styles.header}>
      {/* Render humberger menu */}
      <MenuIcon onClick={menuIconClickHandler} />
      <h1>sneakers</h1>

      {/* Render navigation */}
      <Navigation />

      {/* Render cart icon. */}
      <Cart onClick={cartClickHandler} />

      {/* Render avatar. */}
      <img src={avator} alt="user avatar" />
    </header>
  );
};

export default Header;
