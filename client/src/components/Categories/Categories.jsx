import React, { Component, Fragment } from "react";
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

    window.addEventListener("resize", debounce(250, this.windowResizeHandler));
  }

  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      debounce(250, this.windowResizeHandler)
    );
  }

  windowResizeHandler = () => {
    if (window.innerWidth < 992) {
      this.setState({ small: true });
    } else {
      this.setState({ small: false });
    }
  };

  render() {
    const { small } = this.state;

    const rows = new Array(Math.ceil(categoriesData.length) / 6);

    for (let i = 0; i < rows.length; i++) {
      rows[i] = { items: categoriesData.slice(i * 6, i * 6 + 6) };
    }

    const categoriesListLarge = rows.map((item, index) => (
      <Fragment key={index}>
        <div className={classes.category__item}>
          {item.items.slice(0, 2).map((category, i) => (
            <CategoryItem
              key={category.id}
              lg={i % 2 === 0}
              title={category.title}
              imageUrl={category.imageUrl}
              description={category.description}
            />
          ))}
        </div>
        <div className={classes.category__item}>
          {item.items.slice(2, 4).map((category, i) => (
            <CategoryItem
              key={category.id}
              lg={i % 2}
              title={category.title}
              imageUrl={category.imageUrl}
              description={category.description}
            />
          ))}
        </div>
        <div className={classes.category__item}>
          {item.items.slice(4, 6).map((category, i) => (
            <CategoryItem
              key={category.id}
              lg={i % 2 === 0}
              title={category.title}
              imageUrl={category.imageUrl}
              description={category.description}
            />
          ))}
        </div>
      </Fragment>
    ));

    const categoriesListSmall = categoriesData.map((category, i) => {
      return (
        <CategoryItem
          key={category.id}
          lg={i % 2 === 0}
          title={category.title}
          imageUrl={category.imageUrl}
          description={category.description}
        />
      );
    });

    return (
      <section className={classes.categories__container}>
        {small ? categoriesListSmall : categoriesListLarge}
      </section>
    );
  }
}

export default Categories;
