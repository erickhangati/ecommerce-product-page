import React from "react";

import styles from "./Overlay.module.css";

// Re-usable overlay.

const Overlay = (props) => {
  return <div className={styles.overlay} onClick={props.onClick} />;
};

export default Overlay;
