import React, { Component } from "react";
import { Image } from "react-bootstrap";
import classes from "./Price.module.scss";

export default class Price extends Component {
  render() {
    const { discount, price, discount_percent, discount_price, inline } =
      this.props;

    return (
      <div className={classes.price__container}>
        <div
          className={`${
            inline && "d-flex align-items-center justify-content-center"
          }`}
        >
          <div className={classes.price}>{price} L.E</div>
          {discount && (
            <div className={classes.discount__price}>
              <span className={`${inline && "mx-3"}`}>
                {discount_price} L.E
              </span>
              <div className={classes.discount__percent}>
                {discount_percent}% Off
              </div>
            </div>
          )}
        </div>
        {!inline && (
          <div className={classes.brand__container}>
            <Image fluid src="images/adidas.svg" />
          </div>
        )}
      </div>
    );
  }
}
