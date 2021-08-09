import React from "react";
import classes from "./Button.module.scss";

const Button = ({
  className,
  title,
  renderIcon,
  bgColor,
  titleColor,
  ...restProps
}) => {
  return (
    <button
      {...restProps}
      className={`${classes.button} ${renderIcon ? classes.iconPadding : ""} ${
        className && className
      }`}
      style={{
        backgroundColor: bgColor,
        justifyContent: renderIcon ? "space-between" : "center",
      }}
    >
      <span className={classes.title} style={{ color: titleColor }}>
        {title}
      </span>
      {renderIcon && <span className={classes.icon}>{renderIcon()}</span>}
    </button>
  );
};

export default Button;
