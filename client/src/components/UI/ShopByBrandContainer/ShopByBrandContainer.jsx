import React from "react";
import classes from "./ShopByBrandContainer.module.scss";

const ShopByBrandContainer = props => {
  const { title, description, brandIcon, imageUrl, buttonTitle } = props;

  return (
    <div className={classes.container}>
      <div className={classes.brand}>
        <h3 className={classes.brand__name}>{title}</h3>
        <div className={classes.brand__icon}>
          <img className="img-fluid" src={brandIcon} alt={title} />
        </div>
        <p className={classes.brand__description}>{description}</p>
        <button className={classes.brandButton}>{buttonTitle}</button>
      </div>
      <div className={classes.brand__banner}>
        <img src={imageUrl} alt="brand banner" />
      </div>
    </div>
  );
};

export default ShopByBrandContainer;
