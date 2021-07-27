import React, { Component, Fragment } from "react";
import { debounce } from "throttle-debounce";
import GiftItem from "../UI/GiftItem/GiftItem";
import classes from "./GiftsList.module.scss";

class GiftsList extends Component {
  state = {
    small: false,
  };

  componentDidMount() {
    if (window.innerWidth < 992) {
      this.setState({ small: true });
    }

    window.addEventListener("resize", this.windowResizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.windowResizeHandler);
  }

  windowResizeHandler = debounce(250, () => {
    if (window.innerWidth < 575) {
      this.setState({ small: true });
    } else {
      this.setState({ small: false });
    }
  });

  render() {
    const { gifts, length } = this.props;
    const { small } = this.state;

    const copiedGifts = [...gifts];
    const firstItem = copiedGifts[0];

    const rows = new Array(Math.ceil(copiedGifts.slice(0, length).length / 2));

    for (let i = 0; i < rows.length; i++) {
      rows[i] = {
        items: copiedGifts.slice(1, Infinity).slice(i * 2, i * 2 + 2),
      };
    }

    const giftsList = rows.map((item, i) => (
      <div key={i} className={classes.gift__column}>
        {item.items.map(item => (
          <GiftItem key={item.id} title={item.title} imageUrl={item.imageUrl} />
        ))}
      </div>
    ));

    const listForLg = (
      <Fragment>
        <GiftItem
          title={firstItem.title}
          imageUrl={firstItem.imageUrl}
          className={classes.gift__item}
        />
        {giftsList}
      </Fragment>
    );

    const listForSm = gifts.map(item => (
      <GiftItem key={item.id} title={item.title} imageUrl={item.imageUrl} />
    ));

    return small ? listForSm : listForLg;
  }
}

export default GiftsList;
