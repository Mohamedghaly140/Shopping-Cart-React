import React, { Component } from "react";
import Spinner from "../../components/UI/Spinner/Spinner";
import ProductList from "../ProductList/ProductList";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";
import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";

import classes from "./SimilarProducts.module.scss";
import Section from "../UI/Section/Section";

class SimilarProducts extends Component {
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
    const { loading, products } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Section
        className="container mt-0"
        title="Similar Products"
        subTitle="You may like these products also."
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
          <ProductList products={products} length={6} />
        </div>
      </Section>
    );
  }
}

export default SimilarProducts;
