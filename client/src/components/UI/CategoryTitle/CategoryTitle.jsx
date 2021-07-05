import React, { Component } from "react";
import classes from "./CategoryTitle.module.scss";

class CategoryTitle extends Component {
  render() {
    return <h3 className={classes.categoryTitle}>{this.props.children}</h3>;
  }
}

export default CategoryTitle;
