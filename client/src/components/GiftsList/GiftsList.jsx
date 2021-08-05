import React, { Component, Fragment } from "react";
import { withMediaQuery } from "../../hoc/withMediaQuery";
import GiftItem from "../UI/GiftItem/GiftItem";
import classes from "./GiftsList.module.scss";

class GiftsList extends Component {
  render() {
    const { gifts, counts, isMobile } = this.props;

    const firstItem = gifts[0];

    const rows = new Array(Math.ceil(gifts.slice(0, counts).length / 2));

    for (let i = 0; i < rows.length; i++) {
      rows[i] = {
        items: gifts.slice(1, Infinity).slice(i * 2, i * 2 + 2),
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
        {!firstItem ? (
          "loading"
        ) : (
          <GiftItem
            title={firstItem.title}
            imageUrl={firstItem.imageUrl}
            className={classes.gift__item}
          />
        )}
        {giftsList}
      </Fragment>
    );

    const listForSm = gifts.map(item => (
      <GiftItem key={item.id} title={item.title} imageUrl={item.imageUrl} />
    ));

    return isMobile ? listForSm : listForLg;
  }
}

export default withMediaQuery(GiftsList);
