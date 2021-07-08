import React, { Component } from "react";
import classes from "./DropdownItem.module.scss";

class DropdownItem extends Component {
  render() {
    const { title } = this.props;

    return (
      <li className={classes.dropdownItem}>
        <button className={classes.link}>{title}</button>
      </li>
    );
  }
}

export default DropdownItem;
