import React from "react";
import FlexBox from "../FlexBox/FlexBox";
import RadioButton from "../RadioButton/RadioButton";
import classes from "./PaymentMethodItem.module.scss";

const PaymentMethodItem = ({ title, images }) => {
  return (
    <label className={classes.paymentItem} htmlFor={title}>
      <FlexBox
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <FlexBox
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
        >
          <RadioButton title={title} />
          <span className={classes.title}>{title}</span>
        </FlexBox>
        {images && (
          <FlexBox
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            {images.map(item => (
              <img
                key={item.name}
                alt={item.name}
                src={item.imageUrl}
                className={classes.image}
              />
            ))}
          </FlexBox>
        )}
      </FlexBox>
    </label>
  );
};

export default PaymentMethodItem;
