import React, { Component } from "react";
import Star from "../../Icons/Star";
import EmptyStar from "../../Icons/EmptyStar";

import classes from "./ReviewItem.module.scss";

class ReviewItem extends Component {
  render() {
    const { title, description, user } = this.props;

    return (
      <div className={classes.reviewItem}>
        <div className={classes.rating}>
          <span className={classes.rates}>
            <span className={classes.star}>
              <Star />
            </span>
            <span className={classes.star}>
              <Star />
            </span>
            <span className={classes.star}>
              <Star />
            </span>
            <span className={classes.star}>
              <Star />
            </span>
            <span className={classes.star}>
              <EmptyStar />
            </span>
          </span>
          <span className={classes.title}>{title}</span>
        </div>
        <p className={classes.review}>{description}</p>
        <div className={classes.review__data}>
          <span className={classes.review__date}>17-3-2020</span>
          <span className={classes.review__user}>By {user}</span>
        </div>
      </div>
    );
  }
}

export default ReviewItem;
