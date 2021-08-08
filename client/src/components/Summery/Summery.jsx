import React from "react";
import Button from "../UI/Button/Button";
import classes from "./Summery.module.scss";

const Summery = ({ price }) => {
  return (
    <div className={classes.summery__container}>
      <div className={classes.summery}>
        <div className={classes.subTotal}>
          <span className={classes.label}>Sub Total</span>
          <span className={classes.price}>
            {price} <span className={classes.price__currency}>L.E</span>{" "}
          </span>
        </div>
        <Button className={classes.addCoupon} title="Add Coupon" />
      </div>
      <Button className={classes.checkout} title="Complete Checkout" />
    </div>
  );
};

export default Summery;
