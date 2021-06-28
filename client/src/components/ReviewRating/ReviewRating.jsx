import React, { Component } from "react";
import classes from "./ReviewRating.module.scss";
import ReviewRate from "../ReviewRate/ReviewRate";

class ReviewRating extends Component {
  render() {
    return (
      <div className={classes.reviewRating}>
        <div className={classes.container}>
          <ReviewRate />
        </div>
      </div>
    );
  }
}

export default ReviewRating;
