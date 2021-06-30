import React, { Component, Fragment } from "react";
import classes from "./ReviewRate.module.scss";
import EmptyStar from "../Icons/EmptyStar";
import Star from "../Icons/Star";

class ReviewRate extends Component {
  render() {
    const { rating = 4.9 } = this.props;

    const rate = new Array(5)
      .fill(<Star />, 0, rating)
      .fill(<EmptyStar />, rating);

    return (
      <Fragment>
        <div className={classes.rate}>{rating}</div>
        <div className={classes.rating}>{rate.map(item => item)}</div>
        <div className={classes.rateOf}>{rating} of 5</div>
        <div className={classes.rates}>22 Rates</div>
      </Fragment>
    );
  }
}

export default ReviewRate;
