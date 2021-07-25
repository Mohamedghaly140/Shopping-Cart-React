import React, { Component } from "react";
import Section from "../UI/Section/Section";

import categoriesData from "../../services/all-categories.json";

import CategoriesList from "../CategoriesList/CategoriesList";

import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";

import classes from "./ShopByCategory.module.scss";

class ShopByCategory extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  slideLeftHandler = () => {
    this.sliderRef.current.scrollBy({
      left: -285,
      behavior: "smooth",
    });
  };

  slideRightHandler = () => {
    this.sliderRef.current.scrollBy({
      left: +285,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <Section
        className={classes.shopBy__category}
        buttonTitle="View All"
        title="Shop by category"
        route="/shop-all-categories"
        subTitle="Find what you are looking for by category."
      >
        <div className={classes.categories__list__container}>
          <SliderLeftButton
            className={classes.slide__button}
            onSlideLeft={this.slideLeftHandler}
            color="#fff"
          />
          <SliderRightButton
            className={classes.slide__button}
            onSlideRight={this.slideRightHandler}
            color="#fff"
          />
          <div
            ref={this.sliderRef}
            className={classes.categories__list}
            style={{
              gridTemplateColumns: `repeat(${Math.ceil(
                categoriesData.length / 2
              )}, auto)`,
            }}
          >
            <CategoriesList
              length={10}
              categories={categoriesData}
              className={classes.category__item}
            />
          </div>
        </div>
      </Section>
    );
  }
}

export default ShopByCategory;