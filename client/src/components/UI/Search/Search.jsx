import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SearchIcon from "../../Icons/SearchIcon";

import classes from "./Search.module.scss";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    };

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

  inputFocusHandler = () => {
    this.setState({ focused: true });
  };

  inputBlurHandler = () => {
    this.setState({ focused: false });
  };

  render() {
    const { focused } = this.state;
    const { navbar, scrolled, location } = this.props;
    const { pathname } = location;
    const isHome = pathname === "/" || pathname === "/cart";

    return (
      scrolled && (
        <form
          onSubmit={this.submitSearchHandler}
          className={`${classes.search__container} ${
            navbar && classes.active
          } ${focused && isHome && classes.search__container__focused}`}
        >
          <button type="submit" className={classes.search__icon}>
            <SearchIcon width="24px" height="24px" color="#000" />
          </button>
          <input
            type="text"
            ref={this.searchInput}
            placeholder="Search..."
            className={classes.search}
            onBlur={this.inputBlurHandler}
            onFocus={this.inputFocusHandler}
          />
        </form>
      )
    );
  }
}

Search.defaultProps = {
  scrolled: true,
};

export default withRouter(Search);
