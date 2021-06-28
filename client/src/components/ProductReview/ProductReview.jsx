import React, { Component } from "react";
import Tabs from "../Tabs/Tabs";
import ReviewRating from "../ReviewRating/ReviewRating";
import RateBarContainer from "../RateBarContainer/RateBarContainer";
import Reviews from "../Reviews/Reviews";

import classes from "./ProductReview.module.scss";

class ProductReview extends Component {
  render() {
    return (
      <section className="container my-4">
        <div className={classes.productReview}>
          <Tabs />
          <div className={classes.rating__container}>
            <ReviewRating />
            <RateBarContainer />
            <Reviews />
          </div>
        </div>
      </section>
    );
  }
}

export default ProductReview;
