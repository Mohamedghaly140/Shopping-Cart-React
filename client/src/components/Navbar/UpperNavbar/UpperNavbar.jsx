import { Component } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../../MenuIcon/MenuIcon";
import classes from "./UpperNavbar.module.scss";

// Import Components
import Offer from "./Offer/Offer";
import Info from "./Info/Info";

export class UpperNavbar extends Component {
  render() {
    return (
      <nav className={classes.upper__navbar}>
        <div className="container">
          <div className={classes.inner}>
            <MenuIcon />
            <Link to="/">
              <img
                className="img-fluid"
                src="/images/brand_logo_black.svg"
                alt="brand_logo_black"
              />
            </Link>
            <Offer />
            <Info />
          </div>
        </div>
      </nav>
    );
  }
}

export default UpperNavbar;
