import React from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const ProductList = ({ products, counts = Infinity }) => {
  return products.counts === 0 ? (
    <div className="m-auto">
      <h3>There is no products yet</h3>
    </div>
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

export default ProductList;
