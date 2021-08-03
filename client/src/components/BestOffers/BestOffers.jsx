import React, { Component } from "react";
import Section from "../UI/Section/Section";
import OffersList from "../OffersList/OffersList";
import RowContainer from "../UI/RowContainer/RowContainer";
import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";

import classes from "./BestOffers.module.scss";

class BestOffers extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  slideLeftHandler = () => {
    this.sliderRef.current.onSlideLeft(640);
  };

  slideRightHandler = () => {
    this.sliderRef.current.onSlideRight(640);
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
        <RowContainer ref={this.sliderRef} list={offers}>
          <OffersList offers={offers} />
        </RowContainer>
      </Section>
    );
  }
}

export default BestOffers;
