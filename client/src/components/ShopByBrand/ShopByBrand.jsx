import React, { Component } from "react";
import Section from "../UI/Section/Section";

import Carousel from "nuka-carousel";
import ShopByBrandContainer from "../UI/ShopByBrandContainer/ShopByBrandContainer";
import BrandItem from "../UI/BrandItem/BrandItem";
import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";

import classes from "./ShopByBrand.module.scss";

class ShopByBrand extends Component {
  state = {
    index: 5,
  };

  selectBrandHandler = index => {
    this.setState({ index });
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
    const { index } = this.state;
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
        <Carousel
          // afterSlide={slideIndex => this.setState({ index: slideIndex })}
          wrapAround
          slidesToShow={7}
          cellSpacing={28}
          slidesToScroll="auto"
          className={classes.brand__carousel}
          slideIndex={index}
          // withoutControls={!showThumbArrows}
          // defaultControlsConfig={nukaSarouselSetting(styles)}
          // slidesToShow={slidesToShow}
          // cellAlign={slidesToShow > brands.length ? "center" : "center"}
          // beforeSlide={this.beforeSlide}
          // slideIndex={activeSlideId}
          // initialSlideHeight={180}
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          renderBottomCenterControls={null}
          renderTopLeftControls={
            // showThumbArrows &&
            ({ previousSlide }) => (
              <SliderLeftButton
                className={classes.slide__button}
                onSlideLeft={previousSlide}
              />
            )
          }
          renderTopRightControls={
            // showThumbArrows &&
            ({ nextSlide }) => (
              <SliderRightButton
                className={classes.slide__button}
                onSlideRight={nextSlide}
              />
            )
          }
        >
          {brands.map((item, i) => (
            <BrandItem
              index={i}
              id={item.id}
              brand={item}
              key={item.id}
              title={item.title}
              selected={index === i}
              imageUrl={item.imageUrl}
              onSelectBrand={this.selectBrandHandler}
            />
          ))}
        </Carousel>
      </Section>
    );
  }
}

export default ShopByBrand;
