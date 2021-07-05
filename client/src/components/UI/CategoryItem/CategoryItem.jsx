import React, { Component } from "react";
import ExploreButton from "../ExploreButton/ExploreButton";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import CategoryDescription from "../CategoryDescription/CategoryDescription";

import classes from "./CategoryItem.module.scss";

class CategoryItem extends Component {
  render() {
    const { lg, sm, imageUrl, title, description } = this.props;

    return (
      <div
        className={`${classes.categoryItem} ${lg && classes.categoryItem__lg} ${
          sm && classes.categoryItem__sm
        }`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <CategoryTitle>{title}</CategoryTitle>
        <CategoryDescription>{description}</CategoryDescription>
        <ExploreButton>Explore</ExploreButton>
      </div>
    );
  }
}

export default CategoryItem;
