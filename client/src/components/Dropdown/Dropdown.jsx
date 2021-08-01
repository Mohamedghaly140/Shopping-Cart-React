import React, { Fragment } from "react";
import ArrowUp from "../Icons/ArrowUp";
import ArrowDown from "../Icons/ArrowDown";
import DropdownItem from "./DropdownItem/DropdownItem";

import classes from "./Dropdown.module.scss";

const Dropdown = props => {
  const { items, title, index, currentIndex, onOpen, onClose } = props;

  const open = index === currentIndex;

  const toggleDropdownHander = index => {
    if (index === currentIndex) {
      onClose();
      return;
    }
    onOpen(index);
  };

  return (
    <div className={classes.dropdown}>
      <div
        className={classes.header}
        style={{ borderBottom: open && "0.5px solid #d9d9d9" }}
      >
        <span className={classes.title}>{title}</span>
        <button
          className={classes.button}
          onClick={() => toggleDropdownHander(index)}
        >
          {open ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>
      <Fragment>
        {open && (
          <ul
            className={classes.items_list}
            style={{
              height: open ? "100%" : 0,
            }}
          >
            {items.map(item => (
              <DropdownItem key={item.id} title={item.title} />
            ))}
          </ul>
        )}
      </Fragment>
    </div>
  );
};

export default Dropdown;
