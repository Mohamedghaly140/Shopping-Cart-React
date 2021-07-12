import React, { Component } from "react";

import Title from "../UI/Title/Title";
import SubTitle from "../UI/SubTitle/SubTitle";
import Result from "./Result/Result";
import ArrowRight from "../Icons/ArrowRight";

import classes from "./SearchResultContainer.module.scss";

class SearchResultContainer extends Component {
  render() {
    const { searchValue, products, toggleFilterHandler } = this.props;

    return (
      <div className={classes.searchResultContainer}>
        <div className={classes.header}>
          <div className={classes.title}>
            <Title>{searchValue ? searchValue : "Black T-Shirt"}</Title>
            <SubTitle>1000 items found.</SubTitle>
          </div>

          <select
            defaultValue="default"
            className={classes.sortBy}
            name="sort"
            id="sort"
          >
            <option value="default" disabled>
              Sort By
            </option>
            <option value="price">Price</option>
          </select>

          <button className={classes.filterBy} onClick={toggleFilterHandler}>
            <span>Filter By</span> <ArrowRight />
          </button>
        </div>
        <Result products={products} />
      </div>
    );
  }
}

export default SearchResultContainer;
