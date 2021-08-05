import React from "react";
import ReactDOM from "react-dom";
import classes from "./Backdrop.module.scss";

const Backdrop = ({ open, onToggle, children }) => {
  return ReactDOM.createPortal(
    <div
      onClick={onToggle}
      className={`${classes.backdrop} ${open ? classes.open : classes.close}`}
    >
      {children}
    </div>,
    document.getElementById("backdrop")
  );
};

export default Backdrop;
