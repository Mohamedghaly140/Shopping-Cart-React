import React, { Component } from "react";
import { Link } from "react-router-dom";

import categoriesData from "../../services/all-categories.json";

import Title from "../UI/Title/Title";
import SubTitle from "../UI/SubTitle/SubTitle";
import CategoriesList from "../CategoriesList/CategoriesList";

import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";

import classes from "./ShopByCategory.module.scss";

class ShopByCategory extends Component {
	constructor(props) {
		super(props);
		this.sliderRef = React.createRef();
	}

	slideLeftHandler = () => {
		this.sliderRef.current.scrollBy({
			left: -285,
			behavior: "smooth",
		});
	};

	slideRightHandler = () => {
		this.sliderRef.current.scrollBy({
			left: +285,
			behavior: "smooth",
		});
	};

	render() {
		return (
			<section className={classes.shopBy__category}>
				<div className={classes.categories__container}>
					<div className={classes.header}>
						<div>
							<Title>Shop by category</Title>
							<SubTitle>Find what you are looking for by category.</SubTitle>
						</div>
						<div className={classes.view__all_container}>
							<button className={classes.view__all}>
								<Link to="/shop-all-categories">View All</Link>
							</button>
						</div>
					</div>
				</div>
				<div className={classes.categories__list__container}>
					<SliderLeftButton onSlideLeft={this.slideLeftHandler} color="#fff" />
					<SliderRightButton
						onSlideRight={this.slideRightHandler}
						color="#fff"
					/>
					<div
						ref={this.sliderRef}
						className={classes.categories__list}
						style={{
							gridTemplateColumns: `repeat(${Math.ceil(
								categoriesData.length / 2
							)}, auto)`,
						}}
					>
						<CategoriesList
							length={10}
							categories={categoriesData}
							className={classes.category__item}
						/>
					</div>
				</div>
				<div className={classes.action}>
					<button className={classes.view__all}>
						<Link to="/shop-all-categories">View All</Link>
					</button>
				</div>
			</section>
		);
	}
}

export default ShopByCategory;
