import React, { Component, Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./SideBar.module.scss";
import Dropdown from "../Dropdown/Dropdown";

import sidebarItems from "../../services/sidebar-items.json";

class SideBar extends Component {
  state = {
    index: null,
  };

  openDropdownHandler = index => {
    this.setState({ index });
  };

  resetIndexHandler = () => {
    this.setState({ index: null });
  };

  closeSidebarHandler = () => {
    this.props.onToggleSidebar();
    this.resetIndexHandler();
  };

  render() {
    const { index } = this.state;
    const { openSideBar } = this.props;

    return (
      <Fragment>
        <Backdrop onToggle={this.closeSidebarHandler} open={openSideBar} />
        <aside
          className={`${classes.sideBar} ${
            openSideBar ? classes.open : classes.close
          }`}
        >
          <div className={classes.header}>
            <img
              className={`${classes.yeshtery} img-fluid`}
              src="/images/brand_logo_black.svg"
              alt="yeshtery"
            />
            <h3 className={classes.title}>Category</h3>
            <button onClick={this.closeSidebarHandler}>
              <img className="img-fluid" src="/images/close.svg" alt="close" />
            </button>
          </div>
          {this.props.children}
          <Fragment>
            {sidebarItems.map((item, i) => (
              <Dropdown
                index={i}
                key={item.id}
                title={item.title}
                items={item.items}
                currentIndex={index}
                onClose={this.resetIndexHandler}
                onOpen={this.openDropdownHandler}
                onCloseSidebar={this.closeSidebarHandler}
              />
            ))}
          </Fragment>
        </aside>
      </Fragment>
    );
  }
}

export default SideBar;
