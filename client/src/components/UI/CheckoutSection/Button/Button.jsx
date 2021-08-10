import React from "react";
import classes from "./Button.module.scss";

const Button = ({ children, ...restProps }) => {
  return (
    <button {...restProps} className={classes.button}>
      {children}
    </button>
  );
};

export default Button;
