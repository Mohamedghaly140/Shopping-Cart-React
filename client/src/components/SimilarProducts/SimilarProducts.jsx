import React, { Component } from "react";
import Spinner from "../../components/UI/Spinner/Spinner";
import Title from "../UI/Title/Title";
import SubTitle from "../UI/SubTitle/SubTitle";
import ProductList from "../ProductList/ProductList";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";
import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";

import classes from "./SimilarProducts.module.scss";

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
      <div className="container pt-4 pt-md-0">
        <Title>SimilarProducts</Title>
        <SubTitle>You may like these products also</SubTitle>
        <section className={classes.scroll}>
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
              gridTemplateColumns: `repeat(${
                products.slice(0, 6).length
              },auto)`,
            }}
          >
            <ProductList products={products} length={6} />
          </div>
        </section>
      </div>
    );
  }
}

export default SimilarProducts;
