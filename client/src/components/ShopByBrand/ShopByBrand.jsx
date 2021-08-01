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
    index: 3,
    slides: [],
    viewportWidth: window.innerWidth,
  };

  componentDidMount() {
    const slides = this.props.brands.map(item => {
      return {
        id: item.id,
        title: item.data.title,
        brand: item.data.brand,
        imageUrl: item.data.imageUrl,
        description: item.data.description,
      };
    });

    this.setState({ slides });

    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ viewportWidth: window.innerWidth });
  };

  selectBrandHandler = index => {
    this.setState({ index });
  };

  render() {
    const { index, slides, viewportWidth } = this.state;
    const { brands } = this.props;

    const options = [
      { value: "Rate", label: "Rate" },
      { value: "price", label: "Price" },
    ];

    const isMobile = Boolean(viewportWidth <= 576);
    const isMobileSm = Boolean(viewportWidth <= 320);

    return (
      <Section
        selectOptions={options}
        selectPlaceholder="Fashion"
        title="Shop by brand"
        buttonTitle="View All"
        subTitle="Explore products by your favourite brands."
        renderBeforeList={() => (
          <Carousel
            wrapAround={true}
            autoplay={false}
            cellAlign="center"
            slideIndex={index}
            slidesToScroll={1}
            cellSpacing={isMobile ? 16 : 32}
            className="banner_carousel"
            renderCenterLeftControls={null}
            renderCenterRightControls={null}
            renderBottomCenterControls={null}
            renderTopLeftControls={null}
            renderTopRightControls={null}
            afterSlide={slideIndex => this.setState({ index: slideIndex })}
          >
            {slides.map(item => (
              <ShopByBrandContainer
                key={item.id}
                title={item.title}
                description={item.description}
                buttonTitle={"Shop Now"}
                brandIcon={item.brand}
                imageUrl={item.imageUrl}
              />
            ))}
          </Carousel>
        )}
      >
        <Carousel
          // withoutControls={!showThumbArrows}
          // defaultControlsConfig={nukaSarouselSetting(styles)}
          // slidesToShow={slidesToShow}
          // cellAlign={slidesToShow > brands.length ? "center" : "center"}
          // beforeSlide={this.beforeSlide}
          // slideIndex={activeSlideId}
          // initialSlideHeight={180}
          wrapAround={true}
          autoplay={true}
          cellSpacing={28}
          cellAlign="center"
          slideIndex={index}
          slidesToScroll={1}
          className="brands_carousel"
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          renderBottomCenterControls={null}
          slidesToShow={isMobile ? (isMobileSm ? 4 : 5) : 7}
          afterSlide={slideIndex => this.setState({ index: slideIndex })}
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
