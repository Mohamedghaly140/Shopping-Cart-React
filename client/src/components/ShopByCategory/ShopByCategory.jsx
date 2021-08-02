import React, { Component } from "react";
import Section from "../UI/Section/Section";

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
      left: -400,
      behavior: "smooth",
    });
  };

  slideRightHandler = () => {
    this.sliderRef.current.scrollBy({
      left: +400,
      behavior: "smooth",
    });
  };

  render() {
    const { categories } = this.props;

    return (
      <Section
        className={classes.shopBy__category}
        buttonTitle="View All"
        title="Shop by category"
        route="/shop-all-categories"
        subTitle="Find what you are looking for by category."
      >
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
              categories.length / 2
            )}, auto)`,
          }}
        >
          <CategoriesList
            counts={10}
            categories={categories}
            className={classes.category__item}
          />
        </div>
      </Section>
    );
  }
}

export default ShopByCategory;
