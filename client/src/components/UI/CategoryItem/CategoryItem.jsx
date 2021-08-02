import React from "react";
import ExploreButton from "../ExploreButton/ExploreButton";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import CategoryDescription from "../CategoryDescription/CategoryDescription";

import classes from "./CategoryItem.module.scss";

const CategoryItem = props => {
  const { lg, imageUrlLg, imageUrlSm, title, description, className } = props;

  return (
    <div
      className={`${classes.categoryItem} ${
        lg ? classes.categoryItem__lg : classes.categoryItem__sm
      } ${className}`}
      style={{ backgroundImage: `url(${lg ? imageUrlLg : imageUrlSm})` }}
    >
      <CategoryTitle>{title}</CategoryTitle>
      <CategoryDescription>{description}</CategoryDescription>
      <ExploreButton>Explore</ExploreButton>
    </div>
  );
};

export default CategoryItem;
