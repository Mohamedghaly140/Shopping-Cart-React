import React from "react";
import Rating from "../ProductDetailsRating/Rating";
import classes from "./ProductDetailsItem.module.scss";

const ProductDetailsItem = props => {
  const { className, brandImage, description, type, rate, rates } = props;

  return (
    <div className={`${classes.productDetailsItem} ${className}`}>
      <img
        className={`${classes.brandImage} img-fluid`}
        src={brandImage}
        alt="brand"
      />
      <p className={classes.description}>{description}</p>
      <p className={classes.product__type}>{type}</p>
      <div className={classes.rate__container}>
        <Rating rating={rate} />{" "}
        <span className={classes.rating}>{rate} of 5</span>
        <span className={classes.rates}>{rates} Rates</span>
      </div>
    </div>
  );
};

export default ProductDetailsItem;
