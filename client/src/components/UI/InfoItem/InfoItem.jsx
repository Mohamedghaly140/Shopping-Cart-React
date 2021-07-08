import { Component } from "react";
import PropTypes from "prop-types";
import classes from "./infoItem.module.scss";

class InfoItem extends Component {
  render() {
    const { icon, link, onSearch } = this.props;

    return (
      <div className={classes.info__item} onClick={onSearch}>
        <span className="icon me-2">
          <img className="img-fluid" src={icon} alt="icon" />
        </span>
        <span className={classes.link}>{link}</span>
      </div>
    );
  }
}

InfoItem.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default InfoItem;
