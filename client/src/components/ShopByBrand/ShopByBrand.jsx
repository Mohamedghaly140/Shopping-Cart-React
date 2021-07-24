import React, { Component } from "react";
import Section from "../UI/Section/Section";
import ViewButton from "../UI/ViewButton/ViewButton";

import classes from "./ShopByBrand.module.scss";

class ShopByBrand extends Component {
	render() {
		return (
			<Section
				title="Shop by brand"
				subTitle="Explore products by your favourite brands."
			>
				<div className={classes.container}>
					<div className={classes.brand}>
						<button className={classes.brandButton}>Shop Now</button>
					</div>
				</div>
			</Section>
		);
	}
}

export default ShopByBrand;
