import React, { Component } from "react";
import classes from "./RateBar.module.scss";

class RateBar extends Component {
  render() {
    const { rate } = this.props;

    return (
      <div className={classes.rate__bar}>
        <div className={classes.progress__bar} style={{ width: rate }} />
      </div>
    );
  }
}

export default RateBar;
