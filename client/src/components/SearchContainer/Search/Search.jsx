import React, { Component } from "react";
import classes from "./Search.module.scss";
import SearchIcon from "../../Icons/SearchIcon";

class Search extends Component {
  state = {
    searchTerm: "",
  };

  searchChangeHandler = event => {
    this.setState({ searchTerm: event.target.value });
    this.props.onSearch(event.target.value);
  };

  render() {
    return (
      <div className={classes.search__container}>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchTerm}
          className={classes.search__input}
          onChange={this.searchChangeHandler}
        />
        <SearchIcon />
      </div>
    );
  }
}

export default Search;
