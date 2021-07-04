import { Component } from "react";
import classes from "./SizeItem.module.scss";

class SizeItem extends Component {
  render() {
    const { onSelectSize, value, size } = this.props;

    return (
      <div
        style={{ backgroundColor: this.props.selected ? "#ECECEC" : "#fff" }}
        className={classes.size__item}
        onClick={onSelectSize.bind(null, value)}
      >
        <label>
          {size}
          <input className={classes.select__size} type="radio" value={value} />
        </label>
      </div>
    );
  }
}

export default SizeItem;
