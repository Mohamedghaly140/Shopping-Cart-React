import React, { Component } from "react";
import ProductList from "../ProductList/ProductList";
import Section from "../UI/Section/Section";

import classes from "./PremiumProducts.module.scss";

class PremiumProducts extends Component {
  state = {
    counts: 8,
  };

  showMoreHandler = () => {
    this.setState({ counts: Infinity });
  };

  render() {
    const { counts } = this.state;
    const { products, noLine } = this.props;

    const options = [
      { value: "Rate", label: "Rate" },
      { value: "price", label: "Price" },
    ];

    return (
      <Section
        className={classes.premium__products}
        selectOptions={options}
        selectPlaceholder="Fashion"
        buttonTitle="View All"
        title="Our Special Selection"
        subTitle="Premium products recommended just for you."
        onClickHandler={this.showMoreHandler}
        showMore={counts !== Infinity}
        style={{ border: noLine && "none" }}
      >
        <div className={classes.productList}>
          <ProductList products={products} counts={counts} />
        </div>
      </Section>
    );
  }
}

export default PremiumProducts;
