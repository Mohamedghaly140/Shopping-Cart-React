import React, { Component } from "react";

import classes from "./Rating.module.scss";

export class Rating extends Component {
  render() {
    const { rating } = this.props;

    const rates = new Array(5)
      .fill("/images/star.svg", 0, rating)
      .fill("/images/empty_star.svg", rating);

    return (
      <div className={classes.rating}>
        {rates.map((rateUrl, index) => (
          <img
            key={index}
            alt="star rating"
            className={`${classes.rating__item} img-fluid`}
            src={rateUrl}
          />
        ))}
      </div>
    );
  }
}

export default Rating;
