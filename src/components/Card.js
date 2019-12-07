import React from "react";
import cn from "classnames";
import styles from "./Card.module.css";

const Card = ({ data, className, del, ...props }) => (
  <div className={cn(styles.root, className)} {...props}>
    <div className={styles.delete} onClick={del}>
      X
    </div>
    <p>{data.side1}</p>
    <p>{data.side2}</p>
  </div>
);

export default Card;
