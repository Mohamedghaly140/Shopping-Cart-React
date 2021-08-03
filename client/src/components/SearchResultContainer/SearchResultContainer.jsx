import React, { Component } from "react";

import ArrowRight from "../Icons/ArrowRight";
import ProductList from "../ProductList/ProductList";
import ReactSelect from "../UI/ReactSelect/ReactSelect";
import classes from "./SearchResultContainer.module.scss";

class SearchResultContainer extends Component {
  render() {
    const { products, toggleFilterHandler } = this.props;

    const sortOptions = [
      { value: "price", label: "Price" },
      { value: "Rate", label: "Rate" },
    ];

    const locationOptions = [
      { value: "Al Rehab", label: "Al Rehab" },
      { value: "Madinaty", label: "Madinaty" },
      { value: "1st Settlement", label: "1st Settlement" },
      { value: "Madenet Nasr", label: "Madenet Nasr" },
      { value: "Heliopolis", label: "Heliopolis" },
    ];

    const productsOptions = [
      { value: "Books", label: "Books" },
      { value: "Electronics", label: "Electronics" },
      { value: "Watches", label: "Watches" },
      { value: "Accessories", label: "Accessories" },
    ];

    return (
      <div className={classes.searchResultContainer}>
        <div className={classes.header}>
          <div className={classes.list}>
            <div className={classes.location}>
              <ReactSelect
                className="select__location"
                options={locationOptions}
                placeholder="Any Location"
              />
            </div>
            <div className={classes.products__list}>
              <ReactSelect
                className="select__products"
                options={productsOptions}
                placeholder="Products"
              />
            </div>
          </div>

          <div className={classes.sortBy}>
            <ReactSelect options={sortOptions} placeholder="Sort By" />
          </div>

          <button className={classes.filterBy} onClick={toggleFilterHandler}>
            <span>Filter By</span> <ArrowRight />
          </button>
        </div>
        <div className={classes.productList}>
          <ProductList products={products} />
        </div>
      </div>
    );
  }
}

export default SearchResultContainer;
