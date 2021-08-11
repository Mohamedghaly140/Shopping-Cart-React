import React from "react";
import FlexBox from "../FlexBox/FlexBox";
import RadioButton from "../RadioButton/RadioButton";
import ShapmentInfo from "../ShapmentInfo/ShapmentInfo";
import classes from "./ShippingMethodItem.module.scss";

const ShippingMethodItem = ({
  title,
  imageUrl,
  shippingFees,
  deliveryTime,
  arrivingDate,
}) => {
  return (
    <label className={classes.methodItem} htmlFor={title}>
      <FlexBox
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <div className={classes.select}>
          <RadioButton title={title} />
          <img className={classes.image} src={imageUrl} alt={title} />
          <span className={classes.title}>{title}</span>
        </div>
        <FlexBox
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <ShapmentInfo title={"Shipping Fees"} value={shippingFees} />
          <ShapmentInfo title={"Delivery Time"} value={deliveryTime} />
          <ShapmentInfo title={"Arriving Date"} value={arrivingDate} />
        </FlexBox>
      </FlexBox>
    </label>
  );
};

export default ShippingMethodItem;
