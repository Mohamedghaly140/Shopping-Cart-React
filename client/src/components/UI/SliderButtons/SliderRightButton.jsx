import React from "react";
import ArrowRight from "../../Icons/ArrowRight";
import classes from "./SliderRightButton.module.scss";

const SliderRightButton = props => {
	return (
		<button
			className={`${classes.right__arrow} ${props.className}`}
			onClick={props.onSlideRight}
		>
			<span>
				<ArrowRight />
			</span>
		</button>
	);
};

export default SliderRightButton;
