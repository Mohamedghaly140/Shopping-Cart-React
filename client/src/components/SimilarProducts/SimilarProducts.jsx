import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import Spinner from "../../components/UI/Spinner/Spinner";
import ArrowRight from "../Icons/ArrowRight";
import ArrowLeft from "../Icons/ArrowLeft";
import Title from "../UI/Title/Title";
import SubTitle from "../UI/SubTitle/SubTitle";

import classes from "./SimilarProducts.module.scss";

class SimilarProducts extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  slideLeftHandler = () => {
    this.sliderRef.current.scrollBy({
      left: -285,
      behavior: "smooth",
    });
  };

  slideRightHandler = () => {
    this.sliderRef.current.scrollBy({
      left: +285,
      behavior: "smooth",
    });
  };

  render() {
    const { loading, products } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="container pt-4">
        <Title>SimilarProducts</Title>
        <SubTitle>You may like these products also</SubTitle>
        <section className={classes.scroll}>
          <div className={classes.left__arrow} onClick={this.slideLeftHandler}>
            <span>
              <ArrowLeft />
            </span>
          </div>
          <div
            className={classes.right__arrow}
            onClick={this.slideRightHandler}
          >
            <span>
              <ArrowRight />
            </span>
          </div>
          {products.length === 0 ? (
            <div className="m-auto">
              <h3>There is no products yet</h3>
            </div>
          ) : (
            <div
              className={`${classes.row__container} row`}
              ref={this.sliderRef}
            >
              {products.slice(0, 6).map(product => (
                <div
                  key={product.id}
                  className="mb-4 me-lg-2 me-xl-2 me-xxl-2 col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 justify-content-center"
                >
                  <Link to={`/product/${product.id}`}>
                    <Product product={product} />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default SimilarProducts;
