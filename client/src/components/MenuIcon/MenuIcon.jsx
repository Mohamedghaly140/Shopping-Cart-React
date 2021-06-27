import React, { Component } from "react";
import { Image } from "react-bootstrap";
import classes from "./MenuIcon.module.scss";

export class MenuIcon extends Component {
  render() {
    const { isVisible, marginRight } = this.props;

    return (
      <span
        className={`${classes.menu} ${
          isVisible ? classes.show__menu : classes.hide__menu
        }`}
        style={{ marginRight }}
      >
        <Image src="images/menu_icon.svg" fluid />
      </span>
    );
  }
}

export default MenuIcon;
