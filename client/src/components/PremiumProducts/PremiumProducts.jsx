import React, { Component } from "react";
import ProductList from "../ProductList/ProductList";
import Section from "../UI/Section/Section";

import classes from "./PremiumProducts.module.scss";

class PremiumProducts extends Component {
  state = {
    length: 8,
  };

  showMoreHandler = () => {
    this.setState({ length: Infinity });
  };

  render() {
    const { length } = this.state;
    const { products } = this.props;
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
        showMore={length !== Infinity}
      >
        <div className={classes.productList}>
          <ProductList products={products} length={length} className />
        </div>
      </Section>
    );
  }
}

export default PremiumProducts;
