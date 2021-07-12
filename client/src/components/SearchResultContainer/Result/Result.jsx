import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product from "../../Product/Product";

import classes from "./Result.module.scss";

class Result extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className={classes.result}>
        {products.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className={classes.product__link}
          >
            <Product product={product} />
          </Link>
        ))}
      </div>
    );
  }
}

export default Result;
