import React, { Component } from "react";
import classes from "./ColorItem.module.scss";

class ColorItem extends Component {
  render() {
    const { onSelectColor, image, selected, value } = this.props;

    return (
      <button
        onClick={onSelectColor.bind(null, value)}
        className={`${classes.color__item} ${selected && classes.active}`}
      >
        <img className="img-fluid" alt="color" src={image} />
      </button>
    );
  }
}

export default ColorItem;
