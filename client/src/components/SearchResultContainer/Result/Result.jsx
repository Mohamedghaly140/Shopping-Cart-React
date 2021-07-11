import React, { Component } from "react";
import Product from "../../Product/Product";

import classes from "./Result.module.scss";

class Result extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className={classes.result}>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default Result;
