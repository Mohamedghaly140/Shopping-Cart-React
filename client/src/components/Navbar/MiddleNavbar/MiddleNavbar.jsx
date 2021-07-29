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
            {!isHomePage && (
              <MenuIcon
                className={classes.menuIcon__other}
                onToggleSidebar={onToggleSidebar}
              />
            )}
            {isHomePage && (
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
                    className="img-fluid"
                    src="/images/yeshteryLg.svg"
                    alt="brand_logo_black"
                  />
                </Link>
              </div>
            )}

            {isHomePage && (
              <CSSTransition
                in={isHomePage && this.context.scrolled}
                timeout={800}
                mountOnEnter
                unmountOnExit
                classNames="fade-in"
              >
                <Search navbar={navbar} />
              </CSSTransition>
            )}

            {!isHomePage && <Search navbar={navbar} />}

            {!isHomePage && (
              <img
                className={`${classes.brand} img-fluid`}
                // src="/images/adidas.svg"
                src={this.props.location.state.brand}
                alt="brand"
              />
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

export default withRouter(MiddleNavbar);
