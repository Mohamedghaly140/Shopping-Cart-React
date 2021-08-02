import React, { Component } from "react";
import Section from "../UI/Section/Section";
import ProductList from "../ProductList/ProductList";
import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";

import classes from "./BestSellers.module.scss";

class BestSellers extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  slideLeftHandler = () => {
    this.sliderRef.current.scrollBy({
      left: -310,
      behavior: "smooth",
    });
  };

  slideRightHandler = () => {
    this.sliderRef.current.scrollBy({
      left: +310,
      behavior: "smooth",
    });
  };

  render() {
    const { products, title, subTitle } = this.props;
    const options = [
      { value: "Rate", label: "Rate" },
      { value: "price", label: "Price" },
    ];

    return (
      <Section
        selectOptions={options}
        selectPlaceholder="Men"
        buttonTitle="View All"
        title={title}
        subTitle={subTitle}
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
          className={classes.row__container}
          ref={this.sliderRef}
          style={{
            gridTemplateColumns: `repeat(${products.slice(0, 6).length},auto)`,
          }}
        >
          <ProductList products={products} counts={6} />
        </div>
      </Section>
    );
  }
}

export default BestSellers;
