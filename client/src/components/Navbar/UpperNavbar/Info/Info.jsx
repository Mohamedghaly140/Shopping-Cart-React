import { Component } from "react";
import classes from "./Info.module.scss";

// Import Components
import InfoItem from "../../../UI/InfoItem/InfoItem";

class Info extends Component {
  state = {
    infoLinks: [
      { id: 1, icon: "/images/phone.svg", link: "Contact Us" },
      { id: 2, icon: "/images/shopping_cart.svg", link: "Track Order" },
      { id: 3, icon: "/images/location.svg", link: "Find A Store" },
    ],
  };

  render() {
    const { infoLinks } = this.state;

    return (
      <div className={classes.info}>
        {infoLinks.map((item) => (
          <InfoItem key={item.id} icon={item.icon} link={item.link} />
        ))}
      </div>
    );
  }
}

export default Info;
