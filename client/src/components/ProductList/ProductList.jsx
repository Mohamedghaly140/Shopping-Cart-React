import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

import classes from "./ProductList.module.scss";

const ProductList = props => {
  const { products } = props;

  return (
    <Fragment>
      {products.length === 0 ? (
        <div className="m-auto">
          <h3>There is no products yet</h3>
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-between flex-wrap">
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
      )}
    </Fragment>
  );
};

export default ProductList;
