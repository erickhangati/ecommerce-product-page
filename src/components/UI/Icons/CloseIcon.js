import React from "react";

import styles from "./CloseIcon.module.css";

const CloseIcon = (props) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      fillRule="evenodd"
      onClick={props.onClick}
      className={styles["close-icon"]}
    >
      <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
    </svg>
  );
};

export default CloseIcon;
