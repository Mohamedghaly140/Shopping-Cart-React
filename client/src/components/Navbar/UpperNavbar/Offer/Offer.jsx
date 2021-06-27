import { Component } from "react";
import { Image } from "react-bootstrap";
import classes from "./Offer.module.scss";

class Offer extends Component {
  render() {
    return (
      <div className={classes.offer}>
        <Image src="/images/arrow_left.svg" fluid />
        <p className="mb-0">
          Valentine’s Day Offers! Buy Two Get One Free <span>Shop Now</span>
        </p>
        <Image src="/images/arrow_right.svg" fluid />
      </div>
    );
  }
}

export default Offer;
