import { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Backdrop.module.scss";

class BackDrop extends Component {
  render() {
    const { open, onToggle } = this.props;

    return (
      <div
        onClick={onToggle}
        className={`${classes.backdrop} ${open ? classes.open : classes.close}`}
      >
        {this.props.children}
      </div>
    );
  }
}

class Backdrop extends Component {
  render() {
    const { open, onToggle } = this.props;

    return (
      <Fragment>
        {ReactDOM.createPortal(
          <BackDrop open={open} onToggle={onToggle} />,
          document.getElementById("backdrop")
        )}
      </Fragment>
    );
  }
}

export default Backdrop;
