import React from "react";
import classes from "./BrandItem.module.scss";

const BrandItem = ({ imageUrl, title }) => {
  return (
    <div className={classes.brandItem}>
      <img className="img-fluid" src={imageUrl} alt={title} />
    </div>
  );
};

export default BrandItem;
