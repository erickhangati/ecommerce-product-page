import React from "react";

import styles from "./MenuIcon.module.css";

const MenuIcon = (props) => {
  return (
    <svg
      width="16"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
      fill="#69707D"
      fillRule="evenodd"
      className={styles["menu-icon"]}
      onClick={props.onClick}
    >
      <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" />
    </svg>
  );
};

export default MenuIcon;
