import React, { Component } from "react";
import classes from "./CategoryDescription.module.scss";

class CategoryDescription extends Component {
  render() {
    return <p className={classes.categoryDescription}>{this.props.children}</p>;
  }
}

export default CategoryDescription;
