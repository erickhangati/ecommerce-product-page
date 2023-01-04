import React, { useContext } from "react";

import CartIcon from "../../UI/Icons/CartIcon";
import CartContext from "../../../context/cart-context";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={styles.cart} onClick={props.onClick}>
      <span className={`${cartCtx.cartQuantity > 0 ? styles.badge : ""}`}>
        {cartCtx.cartQuantity}
      </span>
      <CartIcon />
    </div>
  );
};

export default Cart;
