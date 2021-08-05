import React, { Component } from "react";
import { withMediaQuery } from "../../../hoc/withMediaQuery";
import SelectBox from "../SelectBox/SelectBox";

import classes from "./StoreItem.module.scss";

class StoreItem extends Component {
  render() {
    const { title, storeImageUrl, imageUrl, options, isMobile } = this.props;

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

export default withMediaQuery(StoreItem);
