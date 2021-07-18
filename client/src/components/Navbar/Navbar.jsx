import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// Import Components
import UpperNavbar from "./UpperNavbar/UpperNavbar";
import MiddleNavbar from "./MiddleNavbar/MiddleNavbar";
import BottomNavbar from "./BottomNavbar/BottomNavbar";
import BreadCrumb from "./BreadCrumb/BreadCrumb";

import classes from "./Navbar.module.scss";

export class Navbar extends Component {
	render() {
		const {
			onToggleSidebar,
			onSearch,
			cartItems,
			toggleCart,
			onToggleAccount,
			location,
		} = this.props;

		return (
			<header className={classes.navbar}>
				<UpperNavbar onToggleSidebar={onToggleSidebar} />
				<MiddleNavbar
					onSearch={onSearch}
					cartItems={cartItems}
					onToggleCart={toggleCart}
					onToggleSidebar={onToggleSidebar}
					onToggleAccount={onToggleAccount}
				/>
				<BottomNavbar />
				{location.pathname.includes("/product/") && <BreadCrumb />}
			</header>
		);
	}
}

export default withRouter(Navbar);
