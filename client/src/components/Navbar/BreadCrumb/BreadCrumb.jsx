import React, { Component } from "react";
import classes from "./BreadCrumb.module.scss";

class BreadCrumb extends Component {
  render() {
    const breadcrumbLinks = [
      { title: "Men" },
      { title: "Clothing" },
      { title: "Tops" },
      { title: "Adidas" },
      { title: "Adidas Black T-Shirt" },
    ];

    return (
      <nav className={classes.breadcrumb}>
        <div className="container">
          <ul className={classes.breadcrumb__list}>
            {breadcrumbLinks.map((link) => (
              <li key={link.title} className={classes.breadcrumb__item}>
                <a className={classes.breadcrumb__link} href=":javascript;">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default BreadCrumb;
// Men / Clothing / Tops / Adidas / Adidas Black T-Shirt
