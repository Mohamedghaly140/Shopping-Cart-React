import React from "react";
import ArrowLeft from "../../Icons/ArrowLeft";
import classes from "./SliderLeftButton.module.scss";

const SliderLeftButton = props => {
	return (
		<button className={classes.left__arrow} onClick={props.onSlideLeft}>
			<span>
				<ArrowLeft />
			</span>
		</button>
	);
};

export default SliderLeftButton;
