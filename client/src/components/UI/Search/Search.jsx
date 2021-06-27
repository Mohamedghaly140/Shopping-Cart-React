import React, { Component } from "react";
import { Image } from "react-bootstrap";
import classes from "./Search.module.scss";

class Search extends Component {
  state = {
    searchTerm: "",
  };

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className={classes.search__container}>
        <Image src="/images/search.svg" className="mr-2" fluid />
        <input
          className={classes.search}
          type="text"
          placeholder="Search"
          value={this.state.searchTerm}
          onChange={this.searchChangeHandler.bind(this)}
        />
      </div>
    );
  }
}

export default Search;
