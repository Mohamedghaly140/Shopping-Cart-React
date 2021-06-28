import React, { Component, Fragment } from "react";
import classes from "./ReviewRate.module.scss";
import EmptyStar from "../Icons/EmptyStar";
import Star from "../Icons/Star";

class ReviewRate extends Component {
  render() {
    return (
      <Fragment>
        <div className={classes.rate}>4.9</div>
        <div className={classes.rating}>
          <Star />
          <Star />
          <Star />
          <Star />
          <EmptyStar />
        </div>
        <div className={classes.rateOf}>4.9 of 5</div>
        <div className={classes.rates}>22 Rates</div>
      </Fragment>
    );
  }
}

export default ReviewRate;
