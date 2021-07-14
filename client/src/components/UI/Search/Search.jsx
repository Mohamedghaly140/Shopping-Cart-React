import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import classes from "./Search.module.scss";

class Search extends Component {
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
  };

  render() {
    const { navbar } = this.props;

    return (
      <form
        onSubmit={this.submitSearchHandler}
        className={`${classes.search__container} ${navbar && classes.active}`}
      >
        <button type="submit" className={classes.search__icon}>
          <img
            alt="search"
            src="/images/search.svg"
            className="me-2 img-fluid"
          />
        </button>
        <input
          type="text"
          ref={this.searchInput}
          placeholder="Search..."
          className={classes.search}
        />
      </form>
    );
  }
}

export default withRouter(Search);
