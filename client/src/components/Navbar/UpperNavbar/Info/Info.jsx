import { Component } from "react";
import Phone from "../../../Icons/Phone";
import Location from "../../../Icons/Location";
import ShoppingCart from "../../../Icons/ShoppingCart";
import classes from "./Info.module.scss";

// Import Components
import InfoItem from "../../../UI/InfoItem/InfoItem";

class Info extends Component {
  state = {
    infoLinks: [
      { id: 1, icon: Phone, link: "Contact Us" },
      { id: 2, icon: Location, link: "Track Order" },
      { id: 3, icon: ShoppingCart, link: "Find A Store" },
    ],
  };

  render() {
    const { infoLinks } = this.state;
    const { isHomePage } = this.props;

    return (
      <div className={classes.info}>
        {infoLinks.map(item => (
          <InfoItem
            key={item.id}
            Icon={item.icon}
            link={item.link}
            isHomePage={isHomePage}
          />
        ))}
      </div>
    );
  }
}

export default Info;
