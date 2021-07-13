import { Component } from "react";
import classes from "./Info.module.scss";

// Import Components
import InfoItem from "../../../UI/InfoItem/InfoItem";
import Cart from "../../../UI/Cart/Cart";

class Info extends Component {
  state = {
    infoLinks: [
      { id: 1, icon: "/images/favourite.svg", link: "Wishlist", class: false },
      { id: 2, icon: "/images/user.svg", link: "Login", class: true },
    ],
  };

  render() {
    const { infoLinks } = this.state;
    const { onSearch } = this.props;

    return (
      <div className={classes.info}>
        <InfoItem
          className={classes.search__icon}
          icon="/images/search.svg"
          link="Search"
          onClick={onSearch}
        />
        <Cart
          icon="/images/shopping_bag.svg"
          link="Cart"
          cartItems={this.props.cartItems}
          toggleCart={this.props.toggleCart}
        />
        {infoLinks.map(item => (
          <InfoItem
            key={item.id}
            icon={item.icon}
            link={item.link}
            className={item.class && classes.user__icon}
          />
        ))}
      </div>
    );
  }
}

export default Info;
