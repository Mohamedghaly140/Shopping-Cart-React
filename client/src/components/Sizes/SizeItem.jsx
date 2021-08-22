import React, { Component } from "react";
import classes from "./SizeItem.module.scss";

class SizeItem extends Component {
  onSelectSizeHandler(value) {
    this.props.onSelectSize(value);
  }

  render() {
    const { value, size, selected } = this.props;

    return (
      <button
        onClick={this.onSelectSizeHandler.bind(this, value)}
        className={`${classes.size__item} ${selected && classes.active}`}
      >
        <label>
          {size}
          {/* <input className={classes.select__size} type="radio" value={value} /> */}
        </label>
      </button>
    );
  }
}

export default SizeItem;
