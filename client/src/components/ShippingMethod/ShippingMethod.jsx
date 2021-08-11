import React from "react";
import Button from "../UI/Button/Button";
import FlexBox from "../UI/FlexBox/FlexBox";
import Title from "../UI/CheckoutSection/Title/Title";
import ButtonBack from "../UI/CheckoutSection/Button/Button";
import ShippingMethodItem from "../UI/ShippingMethodItem/ShippingMethodItem";

import classes from "./ShippingMethod.module.scss";

const ShippingMethod = ({ options, onGoBack }) => {
  return (
    <section>
      <Title>Shipping Method</Title>
      <div className={classes.optionsList}>
        {options.map(item => (
          <ShippingMethodItem
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            shippingFees={item.shippingFees}
            deliveryTime={item.deliveryTime}
            arrivingDate={item.arrivingDate}
          />
        ))}
      </div>
      <FlexBox className={classes.split}>
        <span className={classes.options}>or</span>
      </FlexBox>
      <FlexBox
        className={classes.actions}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <ButtonBack onClick={onGoBack}>Go Back</ButtonBack>
        <Button
          bgColor="#FFF200"
          title="Pickup from store"
          className={classes.pickup}
        />
      </FlexBox>
    </section>
  );
};

export default ShippingMethod;
