import React, { Component } from "react";
import classes from "./Title.module.scss";

class Title extends Component {
  render() {
    return <h2 className={classes.title}>{this.props.children}</h2>;
  }
}

export default Title;
