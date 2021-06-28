import React, { Component } from "react";
import ReviewItem from "./ReviewItem/ReviewItem";

import classes from "./Reviews.module.scss";

class Reviews extends Component {
  render() {
    return (
      <div className={classes.reviews}>
        <ReviewItem />
        <ReviewItem />
      </div>
    );
  }
}

export default Reviews;
