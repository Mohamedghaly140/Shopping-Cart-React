import React from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import EmptyFallback from "../UI/EmptyFallback/EmptyFallback";

const ProductList = ({ products, counts }) => {
  return products.counts === 0 ? (
    <EmptyFallback centerY>There is no products yet..</EmptyFallback>
  ) : (
    products.slice(0, counts).map(product => (
      <Link
        key={product.id}
        to={{
          pathname: `/product/${product.id}`,
          state: { brand: product.brand },
        }}
      >
        <Product product={product} />
      </Link>
    ))
  );
};

ProductList.defaultProps = {
  counts: Infinity,
};

export default ProductList;
