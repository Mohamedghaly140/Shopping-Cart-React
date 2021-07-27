import React, { Component } from "react";
import Section from "../UI/Section/Section";
import ToursList from "../ToursList/ToursList";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";
import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";

import classes from "./VirtualTour.module.scss";

class VirtualTour extends Component {
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
        <div
          ref={this.sliderRef}
          className={classes.tours__list}
          style={{
            gridTemplateColumns: `repeat(${Math.ceil(tours.length)}, auto)`,
          }}
        >
          <ToursList tours={tours} />
        </div>
      </Section>
    );
  }
}

export default VirtualTour;
