import React, { Component } from "react";
import Section from "../UI/Section/Section";
import ProductList from "../ProductList/ProductList";
import RowContainer from "../UI/RowContainer/RowContainer";
import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";

import classes from "./BestSellers.module.scss";

class BestSellers extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  slideLeftHandler = () => {
    this.sliderRef.current.onSlideLeft(310);
  };

  slideRightHandler = () => {
    this.sliderRef.current.onSlideRight(310);
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
        <RowContainer ref={this.sliderRef} list={products} counts={6}>
          <ProductList products={products} counts={6} />
        </RowContainer>
      </Section>
    );
  }
}

export default BestSellers;
