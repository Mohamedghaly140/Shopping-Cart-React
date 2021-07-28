import React from "react";
import classes from "./OfferItem.module.scss";

const OfferItem = props => {
  const { title, description, brand, imageUrl } = props;

  return (
    <div className={classes.offerItem}>
      <img className="img-fluid" src={imageUrl} alt="imageUrl" />
      <div className={classes.overlay} />
      <div className={classes.caption}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.description}>{description}</p>
        <div className={classes.brand__container}>
          <img className="img-fluid" src={brand} alt="brand" />
        </div>
      </div>
    </div>
  );
};

export default OfferItem;
