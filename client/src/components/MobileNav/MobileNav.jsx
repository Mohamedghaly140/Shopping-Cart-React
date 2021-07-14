import React, { Component } from "react";
import Home from "../Icons/Home";
import Brands from "../Icons/Brands";
import Account from "../Icons/Account";
import Category from "../Icons/Category";
import NavItem from "../UI/NavItem/NavItem";

import classes from "./MobileNav.module.scss";

class MobileNav extends Component {
  render() {
    const navItems = [
      { id: 1, label: "Home", icon: Home, active: false },
      { id: 2, label: "Category", icon: Category, active: false },
      { id: 3, label: "Brands", icon: Brands, active: false },
      {
        id: 4,
        label: "Account",
        icon: Account,
        active: this.props.openAccount,
        onClick: this.props.onToggleAccount,
      },
    ];

    return (
      <nav className={classes.mobileNav}>
        {navItems.map(item => (
          <NavItem
            key={item.id}
            Icon={item.icon}
            label={item.label}
            active={item.active}
            onClick={item.onClick}
          />
        ))}
      </nav>
    );
  }
}

export default MobileNav;
