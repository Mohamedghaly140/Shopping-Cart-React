import React, { Component } from "react";
import classes from "./Tab.module.scss";

class Tab extends Component {
  render() {
    const { title, active, onTab } = this.props;

    return (
      <div
        className={`${classes.tab} ${active && classes.active}`}
        onClick={() => onTab(title)}
      >
        <label className={classes.tab__link}>
          {title}
          <input type="radio" className={classes.selectinput} value={title} />
        </label>
      </div>
    );
  }
}

export default Tab;
