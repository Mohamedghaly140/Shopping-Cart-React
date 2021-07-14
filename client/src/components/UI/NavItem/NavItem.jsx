import React from "react";
import classes from "./NavItem.module.scss";

const NavItem = props => {
  const { label, Icon, active, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={`${classes.navItem} ${active ? classes.active : ""}`}
    >
      {Icon && (
        <span className={classes.icon}>
          <Icon color={active ? "#542e90" : "#3c3c3b"} />
        </span>
      )}
      <span className={classes.label}>{label}</span>
    </button>
  );
};

export default NavItem;
