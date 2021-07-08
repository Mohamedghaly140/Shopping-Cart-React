import React, { Component, Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./SideBar.module.scss";
import Dropdown from "../Dropdown/Dropdown";

import sidebarItems from "../../services/sidebar-items.json";

class SideBar extends Component {
  render() {
    const { openSideBar, onToggleSidebar } = this.props;

    return (
      <Fragment>
        <Backdrop onToggle={onToggleSidebar} open={openSideBar} />
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
            <button onClick={onToggleSidebar}>
              <img className="img-fluid" src="/images/close.svg" alt="close" />
            </button>
          </div>
          {this.props.children}
          <Fragment>
            {sidebarItems.map(item => (
              <Dropdown key={item.id} title={item.title} items={item.items} />
            ))}
          </Fragment>
        </aside>
      </Fragment>
    );
  }
}

export default SideBar;
