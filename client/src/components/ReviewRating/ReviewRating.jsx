import React, { Component } from "react";
import classes from "./ReviewRating.module.scss";

class ReviewRating extends Component {
  render() {
    return (
      <div className={classes.reviewRating}>
        <div>
          <div className={classes.rate}>4.9</div>
        </div>
      </div>
    );
  }
}

export default ReviewRating;
