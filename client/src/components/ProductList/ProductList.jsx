import React from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

import classes from "./ProductList.module.scss";

const ProductList = props => {
  const { products, length = Infinity } = props;

  return products.length === 0 ? (
    <div className="m-auto">
      <h3>There is no products yet</h3>
    </div>
  ) : (
    <div className={classes.productList}>
      {products.slice(0, length).map(product => (
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
};

export default ProductList;
