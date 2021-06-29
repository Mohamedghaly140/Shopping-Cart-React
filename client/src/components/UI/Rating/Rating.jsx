import { Component } from "react";
import { Image } from "react-bootstrap";

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
          <Image
            key={index}
            fluid
            className={classes.rating__item}
            src={rateUrl}
          />
        ))}
      </div>
    );
  }
}

export default Rating;
