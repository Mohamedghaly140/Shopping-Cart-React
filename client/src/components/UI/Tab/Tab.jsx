import React, { Component } from "react";
import classes from "./Tab.module.scss";

class Tab extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className={classes.tab}>
        <label className={classes.tab__link}>
          {title}
          <input type="radio" className={classes.selectinput} value={title} />
        </label>
      </div>
    );
  }
}

export default Tab;
