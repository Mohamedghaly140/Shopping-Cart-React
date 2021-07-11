import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import SearchTable from "../components/SearchTable/SearchTable";
import SearchResultContainer from "../components/SearchResultContainer/SearchResultContainer";

import classes from "./SearchResult.module.scss";

class SearchResult extends Component {
  render() {
    const searchValue = this.props.location.search.split("=")[1];

    return (
      <div className="container">
        <section className={classes.searchResult}>
          <SearchTable />
          <SearchResultContainer
            searchValue={searchValue}
            products={this.props.products}
          />
        </section>
      </div>
    );
  }
}

export default withRouter(SearchResult);
