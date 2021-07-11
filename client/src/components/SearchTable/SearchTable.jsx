import React, { Component } from "react";
import classes from "./SearchTable.module.scss";

import searchData from "../../services/search-items.json";
import SearchDropdown from "./SearchDropdown/SearchDropdown";

class SearchTable extends Component {
  render() {
    return (
      <div className={classes.searchTable}>
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
