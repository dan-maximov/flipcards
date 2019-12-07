import React, { forwardRef } from "react";
import cn from "classnames";

const Input = forwardRef(({ className, ...props }, ref) => {
  return <input className={cn(className)} {...props} ref={ref} />;
});

export default Input;
