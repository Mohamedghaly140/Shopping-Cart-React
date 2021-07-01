import { Component } from "react";
import classes from "./Offer.module.scss";

class Offer extends Component {
  render() {
    return (
      <div className={classes.offer}>
        <img
          className="img-fluid"
          alt="arrow_left"
          src="/images/arrow_left.svg"
        />
        <p className="mb-0">
          Valentine’s Day Offers! Buy Two Get One Free <span>Shop Now</span>
        </p>
        <img
          className="img-fluid"
          alt="arrow_right"
          src="/images/arrow_right.svg"
        />
      </div>
    );
  }
}

export default Offer;
