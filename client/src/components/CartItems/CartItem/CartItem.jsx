import React from "react";
import Quantity from "./Quantity/Quantity";
import ReactSelect from "../../UI/ReactSelect/ReactSelect";

import classes from "./CartItem.module.scss";

const sizesOptions = [
  { value: "Small", label: "small" },
  { value: "Medium", label: "medium" },
  { value: "Large", label: "large" },
  { value: "X Large", label: "xLarge" },
  { value: "XX Large", label: "xxLarge" },
];

const colorsOptions = [
  { value: "Red", label: "Red" },
  { value: "Black", label: "Black" },
  { value: "White", label: "White" },
];

const CartItem = ({ cartItem }) => {
  return (
    <div className={classes.cartItem}>
      <div className={classes.product__image}>
        <img src={cartItem.imageUrl.large} alt="product" />
      </div>
      <div className={classes.product__details}>
        <p className={classes.description}>{cartItem.description}</p>
        <p className={classes.price}>
          {cartItem.price}
          <span className={classes.price__currency}>L.E</span>
        </p>
        <div className={classes.brand}>
          <img src={cartItem.brand} alt="brand" />
        </div>
      </div>
      <div className={classes.product__actions}>
        <div className={classes.action__item}>
          <label className={classes.label}>Quantity</label>
          <Quantity qty={cartItem.qty} />
        </div>
        <div className={classes.action__item}>
          <label className={classes.label}>Size</label>
          <div className={classes.select}>
            <ReactSelect
              prefix="cartItem__select"
              options={sizesOptions}
              placeholder={cartItem.size}
            />
          </div>
        </div>
        <div className={classes.action__item}>
          <label className={classes.label}>Color</label>
          <div className={classes.select}>
            <ReactSelect
              prefix="cartItem__select"
              options={colorsOptions}
              placeholder={cartItem.color}
            />
          </div>
        </div>
      </div>
      <div className={classes.action}>
        <button className={classes.remove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
