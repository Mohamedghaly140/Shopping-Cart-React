import React, { Component } from "react";
import RateItem from "./RateItem/RateItem";

import classes from "./RateBarContainer.module.scss";

class RateBarContainer extends Component {
  render() {
    const rates = [
      { percent: "10%", rates: 1 },
      { percent: "92%", rates: 20 },
      { percent: "82%", rates: 15 },
      { percent: "45%", rates: 10 },
      { percent: "20%", rates: 2 },
    ];

    return (
      <div className={classes.container}>
        {rates.map((rate, i) => (
          <RateItem
            key={rate.percent}
            starValue={i + 1}
            barPercent={rate.percent}
            rateValue={rate.rates}
          />
        ))}
      </div>
    );
  }
}

export default RateBarContainer;
