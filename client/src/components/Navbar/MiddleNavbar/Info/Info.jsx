import { Component } from "react";
// Import Components
import User from "../../../Icons/User";
import Cart from "../../../UI/Cart/Cart";
import Search from "../../../Icons/Search";
import Favourite from "../../../Icons/Favourite";
import InfoItem from "../../../UI/InfoItem/InfoItem";

import classes from "./Info.module.scss";

class Info extends Component {
  state = {
    infoLinks: [
      { id: 1, icon: Favourite, link: "Wishlist", class: false },
      {
        id: 2,
        icon: User,
        link: "Login",
        class: true,
        onClick: this.props.toggleAccount,
      },
    ],
  };

  render() {
    const { infoLinks } = this.state;
    const { onSearch, isHomePage } = this.props;

    return (
      <div className={classes.info}>
        <InfoItem
          className={classes.search__icon}
          Icon={Search}
          link="Search"
          onClick={onSearch}
        />
        <Cart
          link="Cart"
          isHomePage={isHomePage}
          icon="/images/shopping_bag.svg"
          cartItems={this.props.cartItems}
          toggleCart={this.props.toggleCart}
        />
        {infoLinks.map(item => (
          <InfoItem
            key={item.id}
            Icon={item.icon}
            link={item.link}
            onClick={item.onClick}
            className={item.class && classes.user__icon}
          />
        ))}
      </div>
    );
  }
}

export default Info;
