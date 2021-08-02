import React from "react";
import classes from "./DropdownItem.module.scss";

const DropdownItem = ({ children, onClick }) => {
  return (
    <li className={classes.dropdownItem}>
      <button onClick={onClick} className={classes.link}>
        {children}
      </button>
    </li>
  );
};

export default DropdownItem;
