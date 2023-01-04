import React from "react";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.navigation}>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
};

export default Navigation;
