import React from "react";
import classes from "./ViewButton.module.scss";

const ViewButton = ({ children, className, ...restProps }) => {
  return (
    <button {...restProps} className={`${classes.ViewButton} ${className}`}>
      {children}
    </button>
  );
};

export default ViewButton;
