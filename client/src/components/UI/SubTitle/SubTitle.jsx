import React from "react";
import classes from "./SubTitle.module.scss";

const SubTitle = props => {
  return <p className={classes.sub__title}>{props.children}</p>;
};

export default SubTitle;
