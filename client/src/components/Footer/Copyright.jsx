import { Component } from "react";
import classes from "./Copyright.module.scss";

class Copyright extends Component {
  render() {
    return (
      <div className={classes.copyright}>
        <p className="mb-2">© 2021 yeshtery, all rights reserved.</p>
        <div className={classes.payments__methods}>
          <img alt="cash" className="img-fluid" src="/images/cash.png" />
          <img alt="visa" className="mx-3 img-fluid" src="/images/visa.png" />
          <img
            alt="matercard"
            className="img-fluid"
            src="/images/matercard.png"
          />
        </div>
        <p>
          <span className="d-inline-block">Powered By</span>{" "}
          <img className="img-fluid" src="/images/nas_nav.svg" alt="NasNav" />
        </p>
      </div>
    );
  }
}

export default Copyright;
