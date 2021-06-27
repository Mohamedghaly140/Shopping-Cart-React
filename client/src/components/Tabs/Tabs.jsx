import React, { Component } from "react";
import classes from "./Tabs.module.scss";
import Tab from "../UI/Tab/Tab";

class Tabs extends Component {
  render() {
    const tabs = [
      { title: "reviews" },
      { title: "specifications" },
      { title: "overview" },
      { title: "share" },
    ];

    return (
      <div className={classes.tabs}>
        {tabs.map((tab) => (
          <Tab key={tab.title} title={tab.title} />
        ))}
      </div>
    );
  }
}

export default Tabs;
