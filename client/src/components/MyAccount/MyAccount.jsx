import React, { Component, Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../UI/Button/Button";
import Login from "./Login/Login";
import Spacer from "../UI/Spacer/Spacer";
import Facebook from "../Icons/Facebook";
import Google from "../Icons/Google";

import classes from "./MyAccount.module.scss";

export class MyAccount extends Component {
  render() {
    const { open, onToggleAccount } = this.props;

    return (
      <Fragment>
        <Backdrop onToggle={onToggleAccount} open={open} />
        <div
          className={`${classes.my__account} ${
            open ? classes.open : classes.close
          }`}
        >
          <div className="d-flex align-items-center justify-content-end mb-0 mb-md-2">
            <button className={classes.close__btn} onClick={onToggleAccount}>
              <img
                className="close img-fluid"
                src="/images/close.svg"
                alt="close"
              />
            </button>
          </div>
          <h2 className={`${classes.title} mb-1 mb-md-3`}>My Account</h2>
          <Login />
          <div className={classes.actions}>
            <Button title={"Login"} bgColor={"#fff200"} titleColor={"#000"} />
            <Spacer className={classes.spacer} />
            <Button title={"Forgot your password?"} titleColor={"#575756"} />
            <Spacer className={classes.spacer} />
            <Button
              title={"Facebook Login"}
              bgColor={"#3B5998"}
              titleColor={"#fff"}
              renderIcon={Facebook}
            />
            <Spacer className={classes.spacer} />
            <Button
              title={"Google Login"}
              bgColor={"#DD4B39"}
              titleColor={"#fff"}
              renderIcon={Google}
            />
            <div className={classes.signup}>
              <p className={classes.get__account}>Don’t have an account?</p>
              <Button
                title={"Sign Up"}
                bgColor={"#542E90 "}
                titleColor={"#fff"}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MyAccount;
