import React, { Component } from "react";
import classes from "./SearchList.module.scss";

class SearchList extends Component {
  render() {
    const { title, list } = this.props;

    return (
      <div className={classes.search_list}>
        <h4 className={classes.search_list_title}>{title}</h4>
        <ul className={classes.list}>
          {list.map(item => (
            <li key={item.id} className={classes.list_item}>
              <button className={classes.item_link}>{item.title}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchList;
