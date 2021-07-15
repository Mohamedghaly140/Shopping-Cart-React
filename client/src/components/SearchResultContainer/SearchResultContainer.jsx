import React, { Component } from "react";
import Select from "react-select";

import Title from "../UI/Title/Title";
import SubTitle from "../UI/SubTitle/SubTitle";
import ArrowRight from "../Icons/ArrowRight";
import ProductList from "../ProductList/ProductList";

import classes from "./SearchResultContainer.module.scss";
import "./ReactSelect.scss";

class SearchResultContainer extends Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption.value);
  };

  render() {
    const { selectedOption } = this.state;
    const { searchValue, products, toggleFilterHandler } = this.props;

    const options = [
      { value: "price", label: "Price" },
      { value: "Rate", label: "Rate" },
    ];

    return (
      <div className={classes.searchResultContainer}>
        <div className={classes.header}>
          <div className={classes.title}>
            <Title>{searchValue ? searchValue : "Black T-Shirt"}</Title>
            <SubTitle>{products.length} items found.</SubTitle>
          </div>

          <div className={classes.sortBy}>
            <Select
              className="sort__by-container"
              classNamePrefix="sort__by"
              options={options}
              value={selectedOption}
              onChange={this.handleChange}
              defaultValue={options[0]}
              placeholder="Sort By"
              isSearchable={false}
            />
          </div>

          <button className={classes.filterBy} onClick={toggleFilterHandler}>
            <span>Filter By</span> <ArrowRight />
          </button>
        </div>
        <ProductList products={products} />
      </div>
    );
  }
}

export default SearchResultContainer;
