import { Component } from "react";
import classes from "./ColorItem.module.scss";

class ColorItem extends Component {
  render() {
    const { onSelectColor, image, selected, value } = this.props;

    return (
      <button
        style={{ border: selected ? "1px solid #542E90" : "none" }}
        className={classes.color__item}
        onClick={() => onSelectColor(value)}
      >
        <img className="img-fluid" alt="color" src={image} />
      </button>
    );
  }
}

export default ColorItem;
