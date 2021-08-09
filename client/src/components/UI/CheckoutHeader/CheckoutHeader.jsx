import React from "react";
import Title from "../Title/Title";
import Steps from "../Steps/Steps";
import SubTitle from "../SubTitle/SubTitle";
import classes from "./CheckoutHeader.module.scss";

const CheckoutHeader = ({ title, subTitle, ...restProps }) => {
  const { shippingAddress, shippingMethod, paymentMethod } = restProps;

  return (
    <div className={classes.checkoutHeader}>
      <div className={classes.titles}>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </div>
      <Steps
        paymentMethod={paymentMethod}
        shippingMethod={shippingMethod}
        shippingAddress={shippingAddress}
      />
    </div>
  );
};

export default CheckoutHeader;
