import React from "react";
import classes from "./AddressDescription.module.scss";

const AddressDescription = props => {
  return <p className={classes.addressDescription}>{props.children}</p>;
};

export default AddressDescription;
