import React, { Component } from "react";
import classes from "./SearchResultContainer.module.scss";

import Title from "../UI/Title/Title";
import SubTitle from "../UI/SubTitle/SubTitle";
import Result from "./Result/Result";

class SearchResultContainer extends Component {
  render() {
    const { searchValue, products } = this.props;

    return (
      <div className={classes.searchResultContainer}>
        <div className={classes.header}>
          <div>
            <Title>Black T-Shirt {searchValue}</Title>
            <SubTitle>1000 items found.</SubTitle>
          </div>
          <select className={classes.sortBy} name="sort" id="sort">
            <option value="">Sort By</option>
          </select>
        </div>
        <Result products={products} />
      </div>
    );
  }
}

export default SearchResultContainer;
