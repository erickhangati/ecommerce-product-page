import React from "react";

import styles from "./Container.module.css";

// Re-usable container.

const Container = (props) => {
  // Local classes plus any classes passed through props.
  const classes = `${styles.container}${
    props.className ? ` ${props.className}` : ""
  }`;

  // Content can be passed in between.
  return <section className={classes}>{props.children}</section>;
};

export default Container;
