import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";

import classes from "./Section.module.scss";

const Section = props => {
	return (
		<section className={`${classes.section} ${props.className}`}>
			<div className={classes.sectionHeader}>
				<div>
					<Title>{props.title}</Title>
					<SubTitle>{props.subTitle}</SubTitle>
				</div>
				<div className={classes.view__all_container}>
					<button className={classes.view__all}>
						<Link to="/shop-all-categories">View All</Link>
					</button>
				</div>
			</div>
			<Fragment>{props.children}</Fragment>
			<div className={classes.action}>
				<button className={classes.view__all}>
					<Link to="/shop-all-categories">View All</Link>
				</button>
			</div>
		</section>
	);
};

export default Section;
