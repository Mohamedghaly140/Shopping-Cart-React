import React, { Component } from "react";
import MenuIcon from "../../MenuIcon/MenuIcon";
import { debounce } from "throttle-debounce";
import classes from "./MiddleNavbar.module.scss";

// Import Components
import Info from "./Info/Info";
import Search from "../../UI/Search/Search";

export class MiddleNavbar extends Component {
  state = {
    navbar: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarHeight);
  }

  changeNavbarHeight = debounce(50, () => {
    if (window.scrollY >= 80) {
      this.setState({ navbar: true });
    } else {
      this.setState({ navbar: false });
    }
  });

  render() {
    const { navbar } = this.state;
    const { onToggleSidebar, onSearch } = this.props;

    return (
      <nav className={`${classes.middle__navbar} ${navbar && classes.active}`}>
        <div className="container">
          <div className={classes.inner}>
            <MenuIcon
              isVisible
              marginRight="16px"
              onToggleSidebar={onToggleSidebar}
            />
            <Search navbar={navbar} />
            <img className="img-fluid" src="/images/adidas.svg" alt="brand" />
            <div className={classes.spacer} />
            <Info
              toggleCart={this.props.toggleCart}
              cartItems={this.props.cartItems}
              onSearch={onSearch}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default MiddleNavbar;
