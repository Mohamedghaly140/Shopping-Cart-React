import React, { Component } from "react";
import Section from "../UI/Section/Section";
import GiftsList from "../GiftsList/GiftsList";

import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";

import classes from "./GiftsOnBudget.module.scss";

class GiftsOnBudget extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  slideLeftHandler = () => {
    this.sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  slideRightHandler = () => {
    this.sliderRef.current.scrollBy({
      left: +300,
      behavior: "smooth",
    });
  };

  render() {
    const { gifts } = this.props;

    const options = [
      { value: "Rate", label: "Rate" },
      { value: "price", label: "Price" },
    ];

    return (
      <Section
        selectOptions={options}
        selectPlaceholder="Fashion"
        buttonTitle="View All"
        title="Gifts On Budget"
        subTitle="Choose your gift within your budget."
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
          className={classes.gifts__list}
          style={{
            gridTemplateColumns: `repeat(${Math.ceil(gifts.length)}, auto)`,
          }}
        >
          <GiftsList gifts={gifts} />
        </div>
      </Section>
    );
  }
}

export default GiftsOnBudget;
