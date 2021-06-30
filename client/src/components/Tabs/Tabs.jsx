import React, { Component } from "react";
import Tab from "../UI/Tab/Tab";

import classes from "./Tabs.module.scss";

class Tabs extends Component {
  render() {
    const { onChangeTab, selectedTab } = this.props;

    const tabs = [
      { title: "reviews", active: true },
      { title: "specifications", active: false },
      { title: "overview", active: false },
      { title: "share", active: false },
    ];

    return (
      <div className={classes.tabs}>
        {tabs.map(tab => (
          <Tab
            key={tab.title}
            title={tab.title}
            active={selectedTab === tab.title}
            onTab={onChangeTab}
          />
        ))}
      </div>
    );
  }
}

export default Tabs;
