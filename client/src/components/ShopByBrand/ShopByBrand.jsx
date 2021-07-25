import React, { Component } from "react";
import Section from "../UI/Section/Section";
import BrandsList from "../BrandsList/BrandsList";

import SliderRightButton from "../UI/SliderButtons/SliderRightButton";
import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";
import brandsData from "../../services/brands.json";
import classes from "./ShopByBrand.module.scss";

class ShopByBrand extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  slideLeftHandler = () => {
    this.sliderRef.current.scrollBy({
      left: -140,
      behavior: "smooth",
    });
  };

  slideRightHandler = () => {
    this.sliderRef.current.scrollBy({
      left: +140,
      behavior: "smooth",
    });
  };

  render() {
    const options = [
      { value: "price", label: "Price" },
      { value: "Rate", label: "Rate" },
    ];

    return (
      <Section
        selectOptions={options}
        selectPlaceholder="Fashion"
        title="Shop by brand"
        buttonTitle="View All"
        subTitle="Explore products by your favourite brands."
      >
        <div className={classes.container}>
          <div className={classes.brand}>
            <h3 className={classes.brand__name}>Levi’s</h3>
            <div className={classes.brand__icon}>
              <img
                className="img-fluid"
                src="/images/levis.svg"
                alt="brand logo"
              />
            </div>
            <p className={classes.brand__description}>
              Famous Levi’s products coming straight from the UK.
            </p>
            <button className={classes.brandButton}>Shop Now</button>
          </div>
        </div>
        <div className={classes.brands__list__container}>
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
            className={classes.brands__list}
            style={{
              gridTemplateColumns: `repeat(${Math.ceil(
                brandsData.length
              )}, auto)`,
            }}
          >
            <BrandsList brands={brandsData} />
          </div>
        </div>
      </Section>
    );
  }
}

export default ShopByBrand;
