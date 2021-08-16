import React from "react";
import Button from "../UI/Button/Button";
import SummeryItem from "./SummeryItem/SummeryItem";

import classes from "./Summery.module.scss";

const Summery = ({
  coupon,
  subTotal,
  shipping,
  grandTotal,
  onCheckout,
  buttonTitle,
  subTotalMain,
  grandTotalMain,
}) => {
  return (
    <div className={classes.summery__container}>
      <div className={classes.summery}>
        <SummeryItem
          main={subTotalMain}
          title="Sub total"
          price={subTotal}
          currency="l.e"
        />
        {shipping && (
          <SummeryItem title="Shipping" price={shipping} currency="l.e" />
        )}
        {grandTotal && (
          <SummeryItem
            currency="l.e"
            title="Grand Total"
            main={grandTotalMain}
            price={grandTotal.toFixed(3)}
          />
        )}
        {coupon && <Button className={classes.addCoupon} title="Add Coupon" />}
      </div>
      <Button
        onClick={onCheckout}
        className={classes.checkout}
        title={buttonTitle || "Complete Checkout"}
      />
    </div>
  );
};

export default Summery;
