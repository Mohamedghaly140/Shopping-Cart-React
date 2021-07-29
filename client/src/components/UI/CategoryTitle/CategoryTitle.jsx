import React from "react";
import classes from "./CategoryTitle.module.scss";

const CategoryTitle = props => {
  return (
    <h3 style={{ color: props.color }} className={classes.categoryTitle}>
      {props.children}
    </h3>
  );
};

export default CategoryTitle;
