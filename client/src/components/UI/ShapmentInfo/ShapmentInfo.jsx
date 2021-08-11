import React from "react";
import FlexBox from "../FlexBox/FlexBox";
import classes from "./ShapmentInfo.module.scss";

const ShapmentInfo = ({ title, value }) => {
  return (
    <FlexBox
      direction="row"
      alignItems="flex-start"
      justifyContent="center"
      className={classes.shapmentInfo}
    >
      <span className={classes.title}>{title}:</span>
      <span className={classes.value}>{value}</span>
    </FlexBox>
  );
};

export default ShapmentInfo;
