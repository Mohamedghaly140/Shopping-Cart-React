import React from "react";
import classes from "./CheckoutSection.module.scss";

const CheckoutSection = ({ className, children }) => {
  return (
    <div className={`${classes.checkout__section} ${className && className}`}>
      {children}
    </div>
  );
};

export default CheckoutSection;
