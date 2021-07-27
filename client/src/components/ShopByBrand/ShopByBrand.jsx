import React, { Component } from "react";
import Section from "../UI/Section/Section";
import BrandsList from "../BrandsList/BrandsList";

import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";
import ShopByBrandContainer from "../UI/ShopByBrandContainer/ShopByBrandContainer";

import classes from "./ShopByBrand.module.scss";

class ShopByBrand extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();

    this.state = {
      selected: 4,
      brand: {},
    };
  }

  selectBrandHandler = brand => {
    this.setState({ selected: brand.id, brand });
  };

  slideLeftHandler = () => {
    this.sliderRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  slideRightHandler = () => {
    this.sliderRef.current.scrollBy({
      left: +200,
      behavior: "smooth",
    });
  };

  render() {
    const { selected } = this.state;
    const { brands } = this.props;

    const options = [
      { value: "Rate", label: "Rate" },
      { value: "price", label: "Price" },
    ];

    return (
      <Section
        selectOptions={options}
        selectPlaceholder="Fashion"
        title="Shop by brand"
        buttonTitle="View All"
        subTitle="Explore products by your favourite brands."
        renderBeforeList={() => (
          <ShopByBrandContainer
            title={"Levi’s"}
            description={"Famous Levi’s products coming straight from the UK."}
            buttonTitle={"Shop Now"}
            brandIcon={"/images/levis.svg"}
            imageUrl={"/images/levis-jean.jpg"}
          />
        )}
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
          className={classes.brands__list}
          style={{
            gridTemplateColumns: `repeat(${Math.ceil(brands.length)}, auto)`,
          }}
        >
          <BrandsList
            brands={brands}
            selected={selected}
            onSelectBrand={this.selectBrandHandler}
          />
        </div>
      </Section>
    );
  }
}

export default ShopByBrand;
