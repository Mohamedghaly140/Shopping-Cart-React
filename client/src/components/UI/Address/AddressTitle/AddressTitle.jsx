import React from "react";
import classes from "./AddressTitle.module.scss";

const AddressTitle = props => {
  return <h4 className={classes.addressTitle}>{props.children}</h4>;
};

export default AddressTitle;
