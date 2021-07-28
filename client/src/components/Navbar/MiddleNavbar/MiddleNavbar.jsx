import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../../MenuIcon/MenuIcon";
import { debounce } from "throttle-debounce";
import { UiContext } from "../../../context/ui-context";
import classes from "./MiddleNavbar.module.scss";

// Import Components
import Info from "./Info/Info";
import Search from "../../UI/Search/Search";

export class MiddleNavbar extends Component {
  static contextType = UiContext;

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
    const {
      onSearch,
      cartItems,
      isHomePage,
      onToggleCart,
      onToggleSidebar,
      onToggleAccount,
    } = this.props;

    return (
      <nav
        className={`${classes.middle__navbar} ${navbar && classes.active} ${
          isHomePage && classes.active__home
        }`}
      >
        <div className="container">
          <div className={classes.inner}>
            {isHomePage && (
              <div>
                <MenuIcon
                  className={classes.menuIcon}
                  onToggleSidebar={onToggleSidebar}
                />
                <Link to="/" className={classes.brand__home}>
                  <img
                    className="img-fluid"
                    src="/images/yeshteryLg.svg"
                    alt="brand_logo_black"
                  />
                </Link>
              </div>
            )}

            {this.context.scrolled && <Search navbar={navbar} />}

            {!isHomePage && (
              <img className="img-fluid" src="/images/adidas.svg" alt="brand" />
            )}
            <div className={classes.spacer} />
            <Info
              onSearch={onSearch}
              cartItems={cartItems}
              isHomePage={isHomePage}
              toggleCart={onToggleCart}
              toggleAccount={onToggleAccount}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default MiddleNavbar;
