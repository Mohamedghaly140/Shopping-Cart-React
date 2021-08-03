import React, { Component } from "react";
import Section from "../UI/Section/Section";
import GiftsList from "../GiftsList/GiftsList";
import RowContainer from "../UI/RowContainer/RowContainer";
import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";

import classes from "./GiftsOnBudget.module.scss";

class GiftsOnBudget extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  slideLeftHandler = () => {
    this.sliderRef.current.onSlideLeft(320);
  };

  slideRightHandler = () => {
    this.sliderRef.current.onSlideRight(320);
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
        <RowContainer list={gifts} ref={this.sliderRef}>
          <GiftsList gifts={gifts} />
        </RowContainer>
      </Section>
    );
  }
}

export default GiftsOnBudget;
