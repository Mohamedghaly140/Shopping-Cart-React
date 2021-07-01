import React, { Component } from "react";
import ReviewItem from "./ReviewItem/ReviewItem";
import classes from "./Reviews.module.scss";

import reviewsData from "../../services/reviews.json";

class Reviews extends Component {
  state = {
    viewAll: true,
  };

  viewAllHandler = () => {
    this.setState({ viewAll: false });
  };

  render() {
    const { viewAll } = this.state;

    return (
      <div className={classes.reviews}>
        {reviewsData.slice(0, viewAll ? 2 : Infinity).map((item, index) => (
          <ReviewItem
            key={index}
            description={item.description}
            user={item.user}
          />
        ))}
        {viewAll && (
          <div className={classes.btn__container}>
            <button className={classes.view__all} onClick={this.viewAllHandler}>
              View All
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Reviews;
