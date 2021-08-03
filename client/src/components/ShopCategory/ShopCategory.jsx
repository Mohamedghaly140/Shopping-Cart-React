import React, { Component } from "react";
import Section from "../UI/Section/Section";
import RowContainer from "../UI/RowContainer/RowContainer";
import ShopCategoryList from "../ShopCategoryList/ShopCategoryList";
import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";

import classes from "./ShopCategory.module.scss";

class ShopCategory extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  slideLeftHandler = () => {
    this.sliderRef.current.onSlideLeft(408);
  };

  slideRightHandler = () => {
    this.sliderRef.current.onSlideRight(408);
  };

  render() {
    const { shops } = this.props;

    return (
      <Section
        title="Shop By Category"
        subTitle="Start shopping by your favourite category"
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
        <RowContainer ref={this.sliderRef} list={shops} counts={6}>
          <ShopCategoryList shops={shops} />
        </RowContainer>
      </Section>
    );
  }
}

export default ShopCategory;
