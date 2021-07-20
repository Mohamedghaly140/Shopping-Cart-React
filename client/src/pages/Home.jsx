import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import Spinner from "../components/UI/Spinner/Spinner";
import ProductList from "../components/ProductList/ProductList";
import Banner from "../components/Banner/Banner";
import BestOffers from "../components/BestOffers/BestOffers";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";

class Home extends Component {
	render() {
		const { loading, products } = this.props;

		if (loading) {
			return <Spinner />;
		}

		return (
			<Fragment>
				<Banner />
				<div className="container">
					<ShopByCategory />
					<BestOffers />
					<div className="d-flex align-items-center justify-content-between flex-wrap mb-2 mb-md-5">
						<Link
							to={`/result?search=${encodeURIComponent("Black T-Shirt")}`}
							className="fw-bold"
							style={{ color: "#542e90" }}
						>
							Search For Black T-Shirt
						</Link>
						<Link
							to="/shop-all-categories"
							className="fw-bold"
							style={{ color: "#542e90" }}
						>
							Shop All
						</Link>
					</div>

					<section className="mt-5">
						<ProductList products={products} />
					</section>
				</div>
			</Fragment>
		);
	}
}

export default withRouter(Home);
