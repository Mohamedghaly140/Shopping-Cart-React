import React, { Component, Fragment } from "react";
import { debounce } from "throttle-debounce";
import ArrowUp from "../../Icons/ArrowUp";
import ArrowDown from "../../Icons/ArrowDown";
import DropdownItem from "./DropdownItem/DropdownItem";
import PriceRange from "./PriceRange/PriceRange";

import classes from "./SearchDropdown.module.scss";

class SearchDropdown extends Component {
  state = {
    open: this.props.open,
    filter: [],
    items: [],
    text: "",
  };

  componentDidMount() {
    this.setState({ items: this.props.items });
  }

  componentDidUpdate(prevProps, prevState) {
    const { text, items } = this.state;

    if (text !== prevState.text) {
      this.setState({
        filter: items.filter(item => {
          const regex = new RegExp(`${text}`, "gi");
          return item.title.match(regex);
        }),
      });
    }
  }

  toggleDropdownHandler = () => {
    this.setState(prevState => {
      return {
        open: !prevState.open,
      };
    });
  };

  searchInputHander = debounce(300, event => {
    this.setState({ text: event.target.value });
  });

  render() {
    const { open, text, filter } = this.state;
    const { items, title } = this.props;

    return (
      <div className={classes.searchDropdown}>
        <div
          className={classes.header}
          style={{ borderBottom: open && "0.5px solid #d9d9d9" }}
        >
          <span className={classes.title}>{title}</span>
          <button
            className={classes.button}
            onClick={this.toggleDropdownHandler}
          >
            {open ? <ArrowUp /> : <ArrowDown />}
          </button>
        </div>
        {title === "Price" ? (
          <PriceRange open={open} />
        ) : (
          <Fragment>
            {open && (
              <Fragment>
                <input
                  className={classes.search__input}
                  type="search"
                  name={title}
                  id={title}
                  placeholder={`Insert ${title}`}
                  onChange={this.searchInputHander}
                />
                <ul className={classes.items_list}>
                  {text !== "" ? (
                    !filter.length ? (
                      <li>No Items found</li>
                    ) : (
                      filter.map(item => (
                        <DropdownItem key={item.id} title={item.title} />
                      ))
                    )
                  ) : (
                    items.map(item => (
                      <DropdownItem key={item.id} title={item.title} />
                    ))
                  )}
                </ul>
                <button className={classes.clear}>Clear</button>
              </Fragment>
            )}
          </Fragment>
        )}
      </div>
    );
  }
}

export default SearchDropdown;
