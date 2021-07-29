import React, { Component } from "react";
import Section from "../UI/Section/Section";
import ShopCategoryList from "../ShopCategoryList/ShopCategoryList";
import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";

import shopData from "../../services/shop.json";

import classes from "./ShopCategory.module.scss";

class ShopCategory extends Component {
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
        <div
          className={classes.row__container}
          ref={this.sliderRef}
          style={{
            gridTemplateColumns: `repeat(${shopData.slice(0, 6).length},auto)`,
          }}
        >
          <ShopCategoryList shops={shopData} />
        </div>
      </Section>
    );
  }
}

export default ShopCategory;
