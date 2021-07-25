import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import classes from "./Caption.module.scss";

class Caption extends Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
  }

  submitSearchHandler = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/result",
      search: `search=${encodeURIComponent(this.searchInput.current.value)}`,
    });
    this.searchInput.current.value = "";
  };

  render() {
    return (
      <div className={classes.banner__caption}>
        <div className={classes.caption__container}>
          <h1 className={classes.title}>Find products and shops near you</h1>
          <p className={classes.slogan}>Enjoy a fairly new experience.</p>
        </div>
        <form
          onSubmit={this.submitSearchHandler}
          className={classes.search__container}
        >
          <input
            type="text"
            ref={this.searchInput}
            className={classes.search__input}
            placeholder="What are you looking for?"
          />
          <button className={classes.search__button}>Search</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Caption);
