import { Component } from "react";
import { Container } from "react-bootstrap";
import MenuIcon from "../../MenuIcon/MenuIcon";
import classes from "./UpperNavbar.module.scss";

// Import Components
import Offer from "./Offer/Offer";
import Info from "./Info/Info";

export class UpperNavbar extends Component {
  render() {
    return (
      <nav className={classes.upper__navbar}>
        <Container>
          <div className={classes.inner}>
            <MenuIcon />
            <img
              className="img-fluid"
              src="/images/brand_logo_black.svg"
              alt="brand_logo_black"
            />
            <Offer />
            <Info />
          </div>
        </Container>
      </nav>
    );
  }
}

export default UpperNavbar;
