import React, { Component } from "react";
import classes from "./Login.module.scss";

import FormControl from "../../UI/FormControl/FormControl";

class Login extends Component {
  render() {
    return (
      <form className={classes.login__form}>
        <FormControl
          label="E-Mail"
          type={"email"}
          id={"email"}
          placeholder={"Enter Your E-Mail"}
        />
        <FormControl
          label="Password"
          type={"password"}
          id={"password"}
          placeholder={"Enter Your Password"}
        />
      </form>
    );
  }
}

export default Login;
