import React from "react";
import Quantity from "../../CartItems/CartItem/Quantity/Quantity";
import classes from "./CheckoutItem.module.scss";

const CheckoutItem = ({ title, imageUrl, price, qty }) => {
  return (
    <div className={classes.checkoutItem}>
      <div className={classes.image}>
        <img src={imageUrl.small} alt={title} />
      </div>
      <div className={classes.details}>
        <h6 className={classes.title}>{title}</h6>
        <p className={classes.price}>{price}</p>
        <div className={classes.actions}>
          <Quantity qty={qty} />
          <button className={classes.remove}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
