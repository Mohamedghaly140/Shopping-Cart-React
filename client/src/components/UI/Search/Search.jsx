import React, { Component } from "react";
import classes from "./Search.module.scss";

class Search extends Component {
  state = {
    searchTerm: "",
  };

  searchChangeHandler = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className={classes.search__container}>
        <img alt="search" src="/images/search.svg" className="me-2 img-fluid" />
        <input
          className={classes.search}
          type="text"
          placeholder="Search"
          value={this.state.searchTerm}
          onChange={this.searchChangeHandler}
        />
      </div>
    );
  }
}

export default Search;
