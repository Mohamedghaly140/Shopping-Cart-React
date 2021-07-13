import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Spinner from "../components/UI/Spinner/Spinner";
import SearchTable from "../components/SearchTable/SearchTable";
import SearchResultContainer from "../components/SearchResultContainer/SearchResultContainer";

import classes from "./SearchResult.module.scss";

class SearchResult extends Component {
  state = {
    filter: false,
  };

  toggleFilterHandler = () => {
    this.setState(prevState => {
      return {
        filter: !prevState.filter,
      };
    });
  };

  render() {
    const { filter } = this.state;
    const { location, loading } = this.props;

    const searchValue = decodeURIComponent(location.search.split("=")[1]);

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="container">
        <section className={classes.searchResult}>
          <SearchTable
            open={filter}
            toggleFilterHandler={this.toggleFilterHandler}
          />
          <SearchResultContainer
            searchValue={searchValue}
            products={this.props.products}
            toggleFilterHandler={this.toggleFilterHandler}
          />
        </section>
      </div>
    );
  }
}

export default withRouter(SearchResult);
