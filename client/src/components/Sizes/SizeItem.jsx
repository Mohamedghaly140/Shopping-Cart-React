import { Component } from "react";
import classes from "./SizeItem.module.scss";

class SizeItem extends Component {
  onSelectSizeHandler(value) {
    this.props.onSelectSize(value);
  }

  render() {
    const { value, size, selected } = this.props;

    return (
      <div
        style={{ backgroundColor: selected ? "#ECECEC" : "#fff" }}
        className={classes.size__item}
        onClick={this.onSelectSizeHandler.bind(this, value)}
      >
        <label>
          {size}
          {/* <input className={classes.select__size} type="radio" value={value} /> */}
        </label>
      </div>
    );
  }
}

export default SizeItem;
