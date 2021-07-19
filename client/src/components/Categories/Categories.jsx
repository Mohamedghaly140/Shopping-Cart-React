import React, { Component } from "react";

import CategoryList from "../CategoriesList/CategoriesList";

import classes from "./Categories.module.scss";

class Categories extends Component {
	render() {
		const { categories } = this.props;

		return (
			<section className={classes.categories__container}>
				<CategoryList categories={categories} />
			</section>
		);
	}
}

export default Categories;
