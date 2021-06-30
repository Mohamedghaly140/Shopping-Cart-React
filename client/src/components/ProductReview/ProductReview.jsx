import React, { Component, Fragment } from "react";
import Tabs from "../Tabs/Tabs";
import ReviewRating from "../ReviewRating/ReviewRating";
import RateBarContainer from "../RateBarContainer/RateBarContainer";
import Reviews from "../Reviews/Reviews";

import classes from "./ProductReview.module.scss";

class ProductReview extends Component {
  state = {
    tab: "reviews",
  };

  changeTabHandler = value => {
    this.setState({ tab: value });
  };

  render() {
    const { tab } = this.state;

    return (
      <section className="container my-4">
        <div className={classes.productReview}>
          <Tabs onChangeTab={this.changeTabHandler} selectedTab={tab} />
          <div className={classes.rating__container}>
            {tab === "reviews" ? (
              <Fragment>
                <ReviewRating />
                <RateBarContainer />
                <Reviews />
              </Fragment>
            ) : tab === "specifications" ? (
              <div className="w-100 h-100 p-5 my-5 d-flex align-items-center justify-content-center">
                <p className="font-weight-bolder">Specifications</p>
              </div>
            ) : tab === "overview" ? (
              <div className="w-100 h-100 p-5 my-5 d-flex align-items-center justify-content-center">
                <p className="font-weight-bolder">Overview</p>
              </div>
            ) : (
              <div className="w-100 h-100 p-5 my-5 d-flex align-items-center justify-content-center">
                <p className="font-weight-bolder">Share</p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default ProductReview;
