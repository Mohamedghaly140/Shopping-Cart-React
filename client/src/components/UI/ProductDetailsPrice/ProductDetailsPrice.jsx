import React, { Component } from "react";
import classes from "./ProductDetailsPrice.module.scss";

export default class Price extends Component {
  render() {
    const { discount, price, discount_percent, discount_price } = this.props;

    return (
      <div className={classes.price__container}>
        <div className="d-flex align-items-center justify-content-center">
          <div className={classes.price}>{price} L.E</div>
          {discount && (
            <div className={classes.discount__price}>
              <span>{discount_price} L.E</span>
              <div className={classes.discount__percent}>
                {discount_percent}% Off
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
