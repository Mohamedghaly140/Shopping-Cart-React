import React from "react";
import classes from "./DropdownItem.module.scss";

const DropdownItem = props => {
  return (
    <li className={classes.dropdownItem}>
      <label htmlFor={props.title} className={classes.item}>
        <input
          className={classes.checkbox}
          type="checkbox"
          name={props.title}
          id={props.title}
        />{" "}
        {props.title}
      </label>
    </li>
  );
};

export default DropdownItem;
