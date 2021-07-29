import React from "react";
import ExploreButton from "../ExploreButton/ExploreButton";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import classes from "./ShopItem.module.scss";

const ShopItem = props => {
  const { title, imageUrl } = props;

  return (
    <div className={classes.shopItem}>
      <img className="img-fluid" src={imageUrl} alt={title} />
      <div className={classes.overlay} />
      <div className={classes.caption}>
        <CategoryTitle color="#fff">{title}</CategoryTitle>
        <ExploreButton>Explore</ExploreButton>
      </div>
    </div>
  );
};

export default ShopItem;
