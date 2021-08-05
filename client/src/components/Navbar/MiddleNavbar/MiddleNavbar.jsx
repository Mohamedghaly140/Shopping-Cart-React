import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import MenuIcon from "../../MenuIcon/MenuIcon";
import { debounce } from "throttle-debounce";
import { UiContext } from "../../../context/ui-context";
import CSSTransition from "react-transition-group/CSSTransition";
import Info from "./Info/Info";
import Search from "../../UI/Search/Search";
import classes from "./MiddleNavbar.module.scss";

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
      logo,
      onSearch,
      location,
      cartItems,
      isMainNav,
      isHomePage,
      onToggleCart,
      onToggleSidebar,
      onToggleAccount,
    } = this.props;

    return (
      <nav
        className={`${classes.middle__navbar} ${navbar && classes.active} ${
          isMainNav && classes.active__home
        }`}
      >
        <div className="container">
          <div className={classes.inner}>
            {!isMainNav && (
              <MenuIcon
                className={classes.menuIcon__other}
                onToggleSidebar={onToggleSidebar}
              />
            )}
            {isMainNav && (
              <div>
                <MenuIcon
                  className={classes.menuIcon}
                  onToggleSidebar={onToggleSidebar}
                />
                <Link
                  to="/"
                  className={`${classes.brand__home} ${
                    navbar && classes.brand__home__active
                  }`}
                >
                  <img
                    src={logo}
                    className="img-fluid"
                    alt="brand_logo_black"
                  />
                </Link>
              </div>
            )}

            {isMainNav && isHomePage && (
              <CSSTransition
                in={isMainNav && this.context.scrolled}
                timeout={800}
                mountOnEnter
                unmountOnExit
                classNames="fade-in"
              >
                <Search navbar={navbar} scrolled={this.context.scrolled} />
              </CSSTransition>
            )}

            {!isMainNav && <Search navbar={navbar} />}
            {isMainNav && !isHomePage && <Search navbar={navbar} />}

            {!isMainNav && (
              <img
                className={`${classes.brand} img-fluid`}
                // src="/images/adidas.svg"
                src={
                  location.pathname.includes("/product/")
                    ? location.state.brand
                    : "/images/adidas.svg"
                }
                alt="brand"
              />
            )}

            <div className={classes.spacer} />

            <Info
              onSearch={onSearch}
              cartItems={cartItems}
              isMainNav={isMainNav}
              toggleCart={onToggleCart}
              toggleAccount={onToggleAccount}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(MiddleNavbar);
