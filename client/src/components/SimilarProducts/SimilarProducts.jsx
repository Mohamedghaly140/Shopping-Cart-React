import React, { Component } from "react";
import Section from "../UI/Section/Section";
import ProductList from "../ProductList/ProductList";
import Spinner from "../../components/UI/Spinner/Spinner";
import RowContainer from "../UI/RowContainer/RowContainer";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";
import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";

import classes from "./SimilarProducts.module.scss";

class SimilarProducts extends Component {
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
    const { loading, products } = this.props;
    const counts = 6;

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
        <RowContainer ref={this.sliderRef} list={products} counts={counts}>
          <ProductList products={products} counts={counts} />
        </RowContainer>
      </Section>
    );
  }
}

export default SimilarProducts;
