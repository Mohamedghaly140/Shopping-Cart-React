import React, { Component } from "react";
import classes from "./BestOffers.module.scss";
import Section from "../UI/Section/Section";

import OffersList from "../OffersList/OffersList";
import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";

class BestOffers extends Component {
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
    const { offers } = this.props;

    const options = [
      { value: "price", label: "Price" },
      { value: "Rate", label: "Rate" },
    ];

    return (
      <Section
        className={classes.bestOffers}
        selectOptions={options}
        selectPlaceholder="Fashion"
        buttonTitle="View All"
        title="Best Offers"
        subTitle="Check out the latest discounts."
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
          className={classes.offersList}
          style={{
            gridTemplateColumns: `repeat(${Math.ceil(offers.length)}, auto)`,
          }}
        >
          <OffersList offers={offers} />
        </div>
      </Section>
    );
  }
}

export default BestOffers;
