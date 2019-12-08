import React from "react";
import cn from "classnames";
import styles from "./FlippableCard.module.css";

const FlippableCard = ({ data, flipped, className, ...props }) => (
  <div className={cn(styles.root, className)} {...props}>
    <div className={cn(styles.inner, { [styles.flipped]: flipped })}>
      <div className={styles.front}>{data.side1}</div>
      <div className={styles.back}>{data.side2}</div>
    </div>
  </div>
);

export default FlippableCard;
