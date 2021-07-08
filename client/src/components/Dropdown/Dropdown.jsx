import React, { Component, Fragment } from "react";
import ArrowUp from "../Icons/ArrowUp";
import ArrowDown from "../Icons/ArrowDown";
import DropdownItem from "./DropdownItem/DropdownItem";

import classes from "./Dropdown.module.scss";

class Dropdown extends Component {
  state = {
    open: false,
  };

  toggleDropdownHandler = () => {
    this.setState(prevState => {
      return {
        open: !prevState.open,
      };
    });
  };

  render() {
    const { open } = this.state;
    const { items, title } = this.props;

    return (
      <div className={classes.dropdown}>
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
        <Fragment>
          {open && (
            <ul
              className={classes.items_list}
              style={{
                height: open ? "100%" : 0,
              }}
            >
              {items.map(item => (
                <DropdownItem key={item.id} title={item.title} />
              ))}
            </ul>
          )}
        </Fragment>
      </div>
    );
  }
}

export default Dropdown;
