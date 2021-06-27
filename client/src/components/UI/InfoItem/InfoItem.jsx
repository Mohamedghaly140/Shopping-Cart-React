import { Component } from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import classes from "./infoItem.module.scss";

class InfoItem extends Component {
  render() {
    const { icon, link } = this.props;

    return (
      <div className={classes.info__item}>
        <span className="icon mr-2">
          <Image src={icon} fluid />
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
