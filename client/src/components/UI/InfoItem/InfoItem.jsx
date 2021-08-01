import { Component } from "react";
import PropTypes from "prop-types";
import classes from "./infoItem.module.scss";

class InfoItem extends Component {
  render() {
    const { Icon, link, onClick, className, isMainNav } = this.props;

    return (
      <button
        className={`${classes.info__item} ${className} ${
          isMainNav && classes.active
        }`}
        onClick={onClick}
      >
        <span className="icon me-0 me-sm-2">
          {Icon && <Icon fill={isMainNav ? "#fff" : "#000"} />}
        </span>
        <span className={classes.link}>{link}</span>
      </button>
    );
  }
}

InfoItem.propTypes = {
  link: PropTypes.string.isRequired,
};

export default InfoItem;
