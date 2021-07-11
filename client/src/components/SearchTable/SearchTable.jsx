import React, { Component } from "react";

import searchData from "../../services/search-items.json";
import SearchDropdown from "./SearchDropdown/SearchDropdown";
import Title from "../UI/Title/Title";
import SubTitle from "../UI/SubTitle/SubTitle";

import classes from "./SearchTable.module.scss";

class SearchTable extends Component {
  render() {
    const { open, toggleFilterHandler } = this.props;

    return (
      <div
        className={`${classes.searchTable} ${
          open ? classes.open : classes.close
        }`}
      >
        <div className={classes.header}>
          <div className={classes.top__bar}>
            <Title>Search Filter</Title>
            <button onClick={toggleFilterHandler}>
              <img className="img-fluid" src="/images/close.svg" alt="close" />
            </button>
          </div>
          <SubTitle>Filter products by your favorite terms.</SubTitle>
        </div>
        {searchData.map(item => (
          <SearchDropdown
            key={item.id}
            title={item.title}
            items={item.items}
            open={item.open}
          />
        ))}
        <SearchDropdown title="Price" open={true} />
        <div className={classes.action}>
          <button className={classes.apply}>Apply</button>
        </div>
      </div>
    );
  }
}

export default SearchTable;
