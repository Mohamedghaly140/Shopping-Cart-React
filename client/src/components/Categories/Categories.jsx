import React, { Component } from "react";
import { debounce } from "throttle-debounce";
import CategoryItem from "../UI/CategoryItem/CategoryItem";
import classes from "./Categories.module.scss";

import categoriesData from "../../services/all-categories.json";

class Categories extends Component {
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
    if (window.innerWidth < 992) {
      this.setState({ small: true });
    } else {
      this.setState({ small: false });
    }
  });

  clacLgItem(outer, inner) {
    const { small } = this.state;

    if (small) {
      return outer % 2 === inner % 2;
    } else {
      return (outer % 3) % 2 === inner % 2;
    }
  }

  render() {
    const rows = new Array(Math.ceil(categoriesData.length) / 2);

    for (let i = 0; i < rows.length; i++) {
      rows[i] = { items: categoriesData.slice(i * 2, i * 2 + 2) };
    }

    const categoriesList = rows.map((item, index) => (
      <div key={index} className={classes.category__item}>
        {item.items.map((category, i) => (
          <CategoryItem
            key={category.id}
            lg={this.clacLgItem(index, i)}
            title={category.title}
            imageUrlLg={category.imageUrlLg}
            imageUrlSm={category.imageUrlSm}
            description={category.description}
          />
        ))}
      </div>
    ));

    return (
      <section className={classes.categories__container}>
        {categoriesList}
      </section>
    );
  }
}

export default Categories;
