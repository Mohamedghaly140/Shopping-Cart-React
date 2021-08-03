import React, { Component } from "react";
import Section from "../UI/Section/Section";
import ToursList from "../ToursList/ToursList";
import RowContainer from "../UI/RowContainer/RowContainer";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";
import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";

import classes from "./VirtualTour.module.scss";

class VirtualTour extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  slideLeftHandler = () => {
    this.sliderRef.current.onSlideLeft(410);
  };

  slideRightHandler = () => {
    this.sliderRef.current.onSlideRight(410);
  };

  render() {
    const { tours } = this.props;

    const options = [
      { value: "vans", label: "Vans" },
      { value: "adidas", label: "Adidas" },
    ];

    return (
      <Section
        selectOptions={options}
        selectPlaceholder="Fashion"
        title="Take A Virtual Tour"
        subTitle="Marketing pleasure through 360 technology"
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
        <RowContainer ref={this.sliderRef} list={tours}>
          <ToursList tours={tours} />
        </RowContainer>
      </Section>
    );
  }
}

export default VirtualTour;
