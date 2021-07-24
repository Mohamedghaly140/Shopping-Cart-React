import React from "react";
import classes from "./BrandButton.module.scss";

const BrandButton = ({ children, className, ...restProps }) => {
	return (
		<button
			{...restProps}
			className={`${classes.brandButton} ${props.className}`}
		>
			{props.children}
		</button>
	);
};

export default BrandButton;
