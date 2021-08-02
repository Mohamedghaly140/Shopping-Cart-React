import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../../MenuIcon/MenuIcon";
import Offer from "./Offer/Offer";
import Info from "./Info/Info";

import classes from "./UpperNavbar.module.scss";

class UpperNavbar extends Component {
  render() {
    const { onToggleSidebar, isMainNav } = this.props;

    return (
      <nav
        className={`${classes.upper__navbar} ${
          isMainNav && classes.upper__navbar__home
        }`}
      >
        <div className="container">
          <div className={classes.inner}>
            {!isMainNav && (
              <div>
                <MenuIcon
                  className={classes.menuIcon}
                  onToggleSidebar={onToggleSidebar}
                />
                <Link to="/">
                  <img
                    className="img-fluid"
                    src="/images/brand_logo_black.svg"
                    alt="brand_logo_black"
                  />
                </Link>
              </div>
            )}

            <Offer isMainNav={isMainNav} />
            <Info isMainNav={isMainNav} />
          </div>
        </div>
      </nav>
    );
  }
}

export default UpperNavbar;
