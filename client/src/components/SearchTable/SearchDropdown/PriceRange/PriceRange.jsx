import React, { Component, Fragment } from "react";
import classes from "./PriceRange.module.scss";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class PriceRange extends Component {
  state = {
    from: 1400,
    to: 8800,
  };

  priceFromChangeHandler = event => {
    this.setState({ from: event.target.valueAsNumber });
  };

  priceToChangeHandler = event => {
    this.setState({ to: event.target.valueAsNumber });
  };

  rangeChangeHandler = event => {
    this.setState({ from: event[0], to: event[1] });
  };

  render() {
    const { from, to } = this.state;
    const { open, priceRange = [0, 10000] } = this.props;

    const railStyle = { background: "#C6C6C6" };
    const trackStyle = [{ backgroundColor: "transparent" }];
    const handleStyle = [
      {
        width: "16px",
        height: "16px",
        boxShadow: "none",
        borderRadius: "8px",
        background: "#575756",
        borderColor: "transparent",
      },
    ];

    return (
      <Fragment>
        {open && (
          <Fragment>
            <div className={classes.price}>
              <form className={classes.price__container}>
                <label htmlFor="from">From</label>
                <input
                  className={classes.price__input}
                  type="number"
                  id="from"
                  ref={this.fromValue}
                  value={from}
                  onChange={this.priceFromChangeHandler}
                />
              </form>
              <hr className={classes.line} />
              <form className={classes.price__container}>
                <label htmlFor="from">To</label>
                <input
                  className={classes.price__input}
                  type="number"
                  id="to"
                  value={to}
                  onChange={this.priceToChangeHandler}
                />
              </form>
            </div>
            <div className={classes.price__range}>
              <Range
                min={priceRange[0]}
                max={priceRange[1]}
                value={[from, to]}
                defaultValue={[from, to]}
                onChange={this.rangeChangeHandler}
                trackStyle={trackStyle}
                railStyle={railStyle}
                handleStyle={handleStyle}
                activeDotStyle={{
                  boxShadow: "none",
                  borderColor: "transparent",
                }}
              />
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default PriceRange;
