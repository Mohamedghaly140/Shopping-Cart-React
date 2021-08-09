import React from "react";
import classes from "./Title.module.scss";

const Title = props => {
  return <h4 className={classes.title}>{props.children}</h4>;
};

export default Title;
