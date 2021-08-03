import React, { Component } from "react";
import SelectBox from "../SelectBox/SelectBox";

import classes from "./StoreItem.module.scss";

class StoreItem extends Component {
  state = {
    viewportWidth: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ viewportWidth: window.innerWidth });
  };

  render() {
    const { viewportWidth } = this.state;
    const { title, storeImageUrl, imageUrl, options } = this.props;

    const isMobile = Boolean(viewportWidth <= 576);

    return (
      <div className={classes.storeItem}>
        <img
          className={classes.storeImageUrl}
          src={storeImageUrl}
          alt={title}
        />
        <div className={classes.caption}>
          <div className={classes.brand}>
            <img className="img-fluid" src={imageUrl} alt={title} />
          </div>
          <p className={classes.title}>{title} Store</p>
        </div>
        <div className={classes.actions}>
          <div className={classes.select__container}>
            <SelectBox
              options={options}
              className="store__dropdown"
              placeholder="Choose Branch"
              menuPlacement={isMobile ? "auto" : "top"}
            />
          </div>
          <button className={classes.start__shopping}>Start Shopping</button>
        </div>
      </div>
    );
  }
}

export default StoreItem;
