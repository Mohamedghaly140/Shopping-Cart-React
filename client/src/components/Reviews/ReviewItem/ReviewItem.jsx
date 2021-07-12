import React, { Component } from "react";
import Rating from "../../UI/ProductDetailsRating/Rating";

import classes from "./ReviewItem.module.scss";

class ReviewItem extends Component {
  render() {
    const {
      review: { title, description, user, rating, date },
    } = this.props;

    return (
      <div className={classes.reviewItem}>
        <div className={classes.rating}>
          <Rating rating={rating} />
          <span className={classes.title}>{title}</span>
        </div>
        <p className={classes.review}>{description}</p>
        <div className={classes.review__data}>
          <span className={classes.review__date}>{date}</span>
          <span className={classes.review__user}>By {user}</span>
        </div>
      </div>
    );
  }
}

export default ReviewItem;
