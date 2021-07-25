import React from "react";
import classes from "./OfferItem.module.scss";

const OfferItem = props => {
  const { title, description, brand, imageUrl } = props;

  const transformedTitle = title.split(" ");
  const year = transformedTitle[0];
  transformedTitle.shift();
  const resolvedTitle = transformedTitle.join(" ");

  return (
    <div className={classes.offerItem}>
      <img className="img-fluid" src={imageUrl} alt="imageUrl" />
      <div className={classes.overlay} />
      <div className={classes.caption}>
        <h2 className={classes.title}>
          <span className="d-block">{year}</span>
          {resolvedTitle}
        </h2>
        <p className={classes.description}>{description}</p>
        <div className={classes.brand__container}>
          <img className="img-fluid" src={brand} alt="brand" />
        </div>
      </div>
    </div>
  );
};

export default OfferItem;
