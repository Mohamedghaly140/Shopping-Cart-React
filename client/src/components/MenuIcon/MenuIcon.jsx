import React, { Component } from "react";
import classes from "./MenuIcon.module.scss";

export class MenuIcon extends Component {
  render() {
    const { isVisible, marginRight, onToggleSidebar } = this.props;

    return (
      <span
        className={`${classes.menu} ${
          isVisible ? classes.show__menu : classes.hide__menu
        }`}
        style={{ marginRight }}
        onClick={onToggleSidebar}
      >
        <img
          className="img-fluid"
          src="/images/menu_icon.svg"
          alt="menu_icon"
        />
      </span>
    );
  }
}

export default MenuIcon;
