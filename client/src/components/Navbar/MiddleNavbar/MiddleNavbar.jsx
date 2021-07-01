import React, { Component } from "react";
import MenuIcon from "../../MenuIcon/MenuIcon";
import classes from "./MiddleNavbar.module.scss";

// Import Components
import Info from "./Info/Info";
import Search from "../../UI/Search/Search";

export class MiddleNavbar extends Component {
  render() {
    return (
      <nav className={classes.middle__navbar}>
        <div className="container">
          <div className={classes.inner}>
            <MenuIcon isVisible marginRight="16px" />
            <Search />
            <img className="img-fluid" src="/images/adidas.svg" alt="brand" />
            <div className={classes.spacer} />
            <Info
              toggleCart={this.props.toggleCart}
              cartItems={this.props.cartItems}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default MiddleNavbar;
