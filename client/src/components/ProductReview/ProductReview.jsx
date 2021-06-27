import React, { Component } from "react";
import classes from "./ProductReview.module.scss";
import Tabs from "../Tabs/Tabs";

class ProductReview extends Component {
  render() {
    return (
      <section className="container my-4">
        <div className={classes.productReview}>
          <Tabs />
        </div>
      </section>
    );
  }
}

export default ProductReview;
