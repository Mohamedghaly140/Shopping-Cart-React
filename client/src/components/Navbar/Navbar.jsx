import { Component } from "react";

// Import Components
import UpperNavbar from "./UpperNavbar/UpperNavbar";
import MiddleNavbar from "./MiddleNavbar/MiddleNavbar";
import BottomNavbar from "./BottomNavbar/BottomNavbar";
import BreadCrumb from "./BreadCrumb/BreadCrumb";

export class Navbar extends Component {
  render() {
    const { onToggleSidebar, cartItems, toggleCart } = this.props;

    return (
      <header>
        <UpperNavbar onToggleSidebar={onToggleSidebar} />
        <MiddleNavbar
          cartItems={cartItems}
          toggleCart={toggleCart}
          onToggleSidebar={onToggleSidebar}
        />
        <BottomNavbar />
        <BreadCrumb />
      </header>
    );
  }
}

export default Navbar;
