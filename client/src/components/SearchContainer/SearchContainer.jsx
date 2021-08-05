import React, { Component } from "react";
import Search from "./Search/Search";
import SearchList from "./SearchList/SearchList";

import classes from "./SearchContainer.module.scss";

class SearchContainer extends Component {
  state = {
    text: "",
  };

  onSearchHandler = searchTerm => {
    this.setState({ text: searchTerm });
  };

  onSearchSubmit = () => {
    // fetch(`/api/products?search=${this.state.text}`)
    // console.log(this.state.text);
  };

  render() {
    const { search, onToggleSearch } = this.props;

    const searchList = [
      { id: 1, title: "Shoes" },
      { id: 2, title: "Shorts" },
      { id: 3, title: "Shirts" },
      { id: 4, title: "T-shirts" },
    ];

    const suggestionsList = [
      { id: 1, title: "New Arrivals" },
      { id: 2, title: "Best Sellers" },
      { id: 3, title: "Latest Offers" },
      { id: 4, title: "T-shirts" },
    ];

    return (
      <div
        className={`${classes.searchContainer} ${
          search ? classes.open : classes.close
        }`}
      >
        <div className={classes.header}>
          <h3 className={classes.title}>Search For:</h3>
          <button onClick={onToggleSearch}>
            <img className="img-fluid" src="/images/close.svg" alt="close" />
          </button>
        </div>
        <Search onSearch={this.onSearchHandler} />
        <SearchList title={"Search Results"} list={searchList} />
        <hr className={classes.line} />
        <SearchList title={"Popular Suggestions"} list={suggestionsList} />
        <div className={classes.action}>
          <button className={classes.search__btn} onClick={this.onSearchSubmit}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchContainer;
