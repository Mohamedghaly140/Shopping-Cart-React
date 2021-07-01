import { Component } from "react";
import classes from "./Subscribe.module.scss";

class Subscribe extends Component {
  render() {
    return (
      <div className={classes.subscribe}>
        <input
          className={classes.input}
          type="email"
          placeholder="Enter Your Mail"
        />
        <button className={classes.send}>
          Subscribe{" "}
          <img
            className="ml-1 img-fluid"
            src="/images/send.svg"
            alt="Subscribe"
          />
        </button>
      </div>
    );
  }
}

export default Subscribe;
