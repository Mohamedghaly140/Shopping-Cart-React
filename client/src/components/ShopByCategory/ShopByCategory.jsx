import React, { Component } from "react";
import Section from "../UI/Section/Section";
import RowContainer from "../UI/RowContainer/RowContainer";
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
    this.sliderRef.current.onSlideLeft(410);
  };

  slideRightHandler = () => {
    this.sliderRef.current.onSlideRight(410);
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
        <RowContainer ref={this.sliderRef} list={categories} columns={2}>
          <CategoriesList
            counts={10}
            categories={categories}
            className={classes.category__item}
          />
        </RowContainer>
      </Section>
    );
  }
}

export default ShopByCategory;
