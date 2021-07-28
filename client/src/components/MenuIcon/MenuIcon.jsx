import React from "react";
import classes from "./MenuIcon.module.scss";

const MenuIcon = props => {
  const { marginRight, onToggleSidebar, className } = props;

  return (
    <button
      className={`${classes.menu} ${className}`}
      style={{ marginRight }}
      onClick={onToggleSidebar}
    >
      <img className="img-fluid" src="/images/menu_icon.svg" alt="menu_icon" />
    </button>
  );
};

export default MenuIcon;
