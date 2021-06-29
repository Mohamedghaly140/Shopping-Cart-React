import { Component } from "react";
import { Image } from "react-bootstrap";
import classes from "./Copyright.module.scss";

class Copyright extends Component {
  render() {
    return (
      <div className={classes.copyright}>
        <p className="mb-2">© 2021 yeshtery, all rights reserved.</p>
        <div className={classes.payments__methods}>
          <Image src="/images/cash.png" fluid />
          <Image className="mx-3" src="/images/visa.png" fluid />
          <Image src="/images/matercard.png" fluid />
        </div>
        <p>
          <span className="d-inline-block">Powered By</span>{" "}
          <Image src="/images/nas_nav.svg" fluid />
        </p>
      </div>
    );
  }
}

export default Copyright;
