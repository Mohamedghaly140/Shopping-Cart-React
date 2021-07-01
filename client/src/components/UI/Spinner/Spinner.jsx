import { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div
        className="d-flex align-items-center justify-content-center m-auto"
        style={{ height: "400px" }}
      >
        <div className="spinner-border text-dark" role="status" />
      </div>
    );
  }
}

export default Spinner;
