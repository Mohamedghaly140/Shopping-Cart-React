import React, { Component, Fragment } from "react";
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
            {breadcrumbLinks.map(link => (
              <Fragment key={link.title}>
                <li className={classes.breadcrumb__item}>
                  <a className={classes.breadcrumb__link} href=":javascript;">
                    {link.title}
                  </a>
                </li>
                <span className={classes.breadcrumb__slash}>/</span>
              </Fragment>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default BreadCrumb;
// Men / Clothing / Tops / Adidas / Adidas Black T-Shirt
