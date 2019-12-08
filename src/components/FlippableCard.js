import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./FlippableCard.module.css";

const FlippableCard = ({ data, flipped, className, ...props }) => {
  const [backWord, setBackWord] = useState(data.side2);

  useEffect(() => {
    setTimeout(setBackWord, 600, data.side2);
  }, [data.side2]);

  return (
    <div className={cn(styles.root, className)} {...props}>
      <div className={cn(styles.inner, { [styles.flipped]: flipped })}>
        <div className={styles.front}>{data.side1}</div>
        <div className={styles.back}>{backWord}</div>
      </div>
    </div>
  );
};

export default FlippableCard;
