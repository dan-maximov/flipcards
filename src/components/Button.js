import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";

const Button = ({ className, ...props }) => {
  return <button className={cn(styles.root, className)} {...props} />;
};

export default Button;
