import React, { Component } from "react";
import classes from "./SubTitle.module.scss";

class SubTitle extends Component {
  render() {
    return <p className={classes.sub__title}>{this.props.children}</p>;
  }
}

export default SubTitle;
