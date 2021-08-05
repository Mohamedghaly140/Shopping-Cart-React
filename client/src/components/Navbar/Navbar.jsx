import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// Import Components
import UpperNavbar from "./UpperNavbar/UpperNavbar";
import MiddleNavbar from "./MiddleNavbar/MiddleNavbar";
import BottomNavbar from "./BottomNavbar/BottomNavbar";
import BreadCrumb from "./BreadCrumb/BreadCrumb";

import classes from "./Navbar.module.scss";

export class Navbar extends Component {
  render() {
    const {
      logo,
      onSearch,
      cartItems,
      toggleCart,
      onToggleAccount,
      onToggleSidebar,
      location: { pathname },
    } = this.props;

    const showSubNav =
      pathname.includes("/product") || pathname.includes("/organization");

    const isHomePage = pathname === "/";

    return (
      <header className={classes.navbar}>
        <UpperNavbar
          onToggleSidebar={onToggleSidebar}
          isMainNav={!showSubNav}
        />
        <MiddleNavbar
          logo={logo}
          onSearch={onSearch}
          cartItems={cartItems}
          onToggleCart={toggleCart}
          onToggleSidebar={onToggleSidebar}
          onToggleAccount={onToggleAccount}
          isMainNav={!showSubNav}
          isHomePage={isHomePage}
        />
        <BottomNavbar />
        {pathname.includes("/product/") && <BreadCrumb />}
      </header>
    );
  }
}

export default withRouter(Navbar);
