import React, { Component } from "react";
import RateBar from "../../RateBar/RateBar";
import Star from "../../Icons/Star";

import classes from "./RateItem.module.scss";

class RateItem extends Component {
  render() {
    const { rateValue = 2, starValue = 5, barPercent = "15%" } = this.props;

    return (
      <div className={classes.rate__item}>
        <div className={classes.star}>
          <Star /> <span>{starValue}</span>
        </div>
        <div className={`${classes.bar} flex-fill`}>
          <RateBar rate={barPercent} />
        </div>
        <div className={classes.rates}>
          <span>{rateValue}</span> {rateValue < 10 && <span>Rates</span>}
        </div>
      </div>
    );
  }
}

export default RateItem;
