import React, { useContext } from "react";
import ReactDOM from "react-dom";

import CartContext from "../../../context/cart-context";
import CloseIcon from "../../UI/Icons/CloseIcon";
import DeleteIcon from "../../UI/Icons/DeleteIcon";

import styles from "./CartHover.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const closeCartHandler = () => {
    // Set cart state to hide.
    props.setShowCartHover(false);
  };

  const deleteProductHandler = () => {
    // Delete cart items.
    cartCtx.setItems({});
    cartCtx.setCartQuantity(0);
    cartCtx.setQuantity(0);
  };

  // If cart is empty return warning component.
  if (!cartCtx.items.name) {
    return (
      <div className={`${styles.cart} ${styles["empty-cart"]}`}>
        <div className={styles["cart-header"]}>
          <h2>Cart</h2>
          <CloseIcon onClick={closeCartHandler} />
        </div>
        <div
          className={`${styles["cart-details"]} ${styles["empty-cart-details"]}`}
        >
          <span className={styles.warning}>⚠</span>
          <span className={styles["warning-message"]}>Cart is empty!</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <div className={styles["cart-header"]}>
        <h2>Cart</h2>
        <CloseIcon onClick={closeCartHandler} />
      </div>
      <div className={styles["cart-details"]}>
        <div className={styles["product-details"]}>
          <img src={cartCtx.items.image} alt="product" />
          <span className={styles["product-name"]}>{cartCtx.items.name}</span>
          <span
            className={styles["product-price"]}
          >{`$${cartCtx.items.price.toFixed(2)} x ${
            cartCtx.cartQuantity
          }`}</span>
          <span className={styles["product-total"]}>{`$${(
            cartCtx.items.price * cartCtx.cartQuantity
          ).toFixed(2)}`}</span>
          <DeleteIcon onClick={deleteProductHandler} />
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

const CartHover = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Cart setShowCartHover={props.setShowCartHover} />,
        document.getElementById("cart-hover")
      )}
    </div>
  );
};

export default CartHover;
