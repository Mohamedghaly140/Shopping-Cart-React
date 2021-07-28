import { Component } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../../MenuIcon/MenuIcon";
import classes from "./UpperNavbar.module.scss";

// Import Components
import Offer from "./Offer/Offer";
import Info from "./Info/Info";
// ${classes.upper__navbar__home}
// document.querySelector(".Caption_search__container__3sJOp").getBoundingClientRect().top
export class UpperNavbar extends Component {
  render() {
    const { onToggleSidebar, isHomePage } = this.props;

    return (
      <nav
        className={`${classes.upper__navbar} ${
          isHomePage && classes.upper__navbar__home
        }`}
      >
        <div className="container">
          <div className={classes.inner}>
            {!isHomePage && <MenuIcon onToggleSidebar={onToggleSidebar} />}
            {!isHomePage && (
              <Link to="/">
                <img
                  className="img-fluid"
                  src="/images/brand_logo_black.svg"
                  alt="brand_logo_black"
                />
              </Link>
            )}
            <Offer isHomePage={isHomePage} />
            <Info isHomePage={isHomePage} />
          </div>
        </div>
      </nav>
    );
  }
}

export default UpperNavbar;
