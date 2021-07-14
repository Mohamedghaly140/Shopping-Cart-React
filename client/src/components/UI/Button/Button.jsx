import React from "react";
import classes from "./Button.module.scss";

const Button = props => {
  const { title, renderIcon, bgColor, titleColor, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={`${classes.button} ${renderIcon ? classes.iconPadding : ""}`}
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
