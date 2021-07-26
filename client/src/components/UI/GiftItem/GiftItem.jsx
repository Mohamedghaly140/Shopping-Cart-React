import React from "react";
import classes from "./GiftItem.module.scss";

const GiftItem = ({ title, imageUrl, className }) => {
  return (
    <div className={`${classes.giftItem} ${className}`}>
      <h5 className={classes.title}>{title}</h5>
      <img className={classes.image} src={imageUrl} alt={title} />
    </div>
  );
};

export default GiftItem;
