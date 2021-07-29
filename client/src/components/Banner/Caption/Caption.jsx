import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { UiContext } from "../../../context/ui-context";
import CSSTransition from "react-transition-group/CSSTransition";
import classes from "./Caption.module.scss";

class Caption extends Component {
  static contextType = UiContext;

  constructor(props) {
    super(props);
    this.searchInputRef = React.createRef();
  }

  componentDidMount() {
    console.dir(this.searchInputRef.current);
    window.addEventListener("scroll", this.changeSearchBarPosition);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeSearchBarPosition);
  }

  changeSearchBarPosition = () => {
    if (window.scrollY >= 530) {
      this.context.changeHandlerTrue();
    } else {
      this.context.changeHandlerFalse();
    }
  };

  submitSearchHandler = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/result",
      search: `search=${encodeURIComponent(this.searchInputRef.current.value)}`,
    });
    this.searchInputRef.current.value = "";
  };

  render() {
    return (
      <div className={classes.banner__caption}>
        <div className={classes.caption__container}>
          <h1 className={classes.title}>Find products and shops near you</h1>
          <p className={classes.slogan}>Enjoy a fairly new experience.</p>
        </div>

        <CSSTransition
          in={window.scrollY < 430}
          timeout={400}
          mountOnEnter
          unmountOnExit
          classNames="fade-slide"
        >
          <form
            onSubmit={this.submitSearchHandler}
            className={classes.search__container}
          >
            <input
              type="text"
              ref={this.searchInputRef}
              className={classes.search__input}
              placeholder="What are you looking for?"
            />
            <button className={classes.search__button}>Search</button>
          </form>
        </CSSTransition>
      </div>
    );
  }
}

export default withRouter(Caption);
