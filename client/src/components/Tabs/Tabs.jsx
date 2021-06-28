import React, { Component } from "react";
import classes from "./Tabs.module.scss";
import Tab from "../UI/Tab/Tab";

class Tabs extends Component {
  render() {
    const tabs = [
      { title: "reviews", active: true },
      { title: "specifications", active: false },
      { title: "overview", active: false },
      { title: "share", active: false },
    ];

    return (
      <div className={classes.tabs}>
        {tabs.map((tab) => (
          <Tab key={tab.title} title={tab.title} active={tab.active} />
        ))}
      </div>
    );
  }
}

export default Tabs;