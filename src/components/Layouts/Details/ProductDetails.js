import React, { useContext } from "react";

import CartContext from "../../../context/cart-context";
import MinusIcon from "../../UI/Icons/MinusIcon";
import PlusIcon from "../../UI/Icons/PlusIcon";
import CartIcon from "../../UI/Icons/CartIcon";

import styles from "./ProductDetails.module.css";
import Images from "../Gallery/Images";

const ProductDetails = () => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.setCartQuantity(
      (previousQuantity) => previousQuantity + cartCtx.quantity
    );

    cartCtx.setQuantity(0);

    cartCtx.setItems((previousItems) => {
      return {
        ...previousItems,
        name: "Fall Limited Edition Sneakers",
        image: Images.thumbNails[0],
        price: 125,
        quantity: cartCtx.cartQuantity,
      };
    });
  };

  const addItemHandler = () => {
    cartCtx.setQuantity(cartCtx.quantity + 1);
  };

  const removeItemHandler = () => {
    if (cartCtx.quantity === 0) return;
    cartCtx.setQuantity(cartCtx.quantity - 1);
  };

  return (
    <div className={styles["product-details"]}>
      <h3>SNEAKER COMPANY</h3>
      <h2>Fall Limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className={styles["product-price"]}>
        <span className={styles.price}>$125.00</span>
        <span className={styles.discount}>50%</span>
        <span className={styles["original-price"]}>$250.00</span>
      </div>
      <div className={styles["add-to-cart"]}>
        <div className={styles.counter}>
          <button onClick={removeItemHandler}>
            <MinusIcon />
          </button>
          <span>{cartCtx.quantity}</span>
          <button onClick={addItemHandler}>
            <PlusIcon />
          </button>
        </div>
        <button
          className={styles["add-to-cart-button"]}
          onClick={addToCartHandler}
        >
          <CartIcon className={styles["cart-icon"]} /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
