import { Component } from "react";
import { Image } from "react-bootstrap";
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
          Subscribe <Image className="ml-1" src="/images/send.svg" fluid />
        </button>
      </div>
    );
  }
}

export default Subscribe;
