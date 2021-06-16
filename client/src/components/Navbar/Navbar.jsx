import { Component } from 'react';

// Import Components
import UpperNavbar from './UpperNavbar/UpperNavbar';
import MiddleNavbar from './MiddleNavbar/MiddleNavbar';
import BottomNavbar from './BottomNavbar/BottomNavbar';

export class Navbar extends Component {
	render() {
		return (
			<header>
				<UpperNavbar />
				<MiddleNavbar
					toggleCart={this.props.toggleCart}
					cartItems={this.props.cartItems}
				/>
				<BottomNavbar />
			</header>
		);
	}
}

export default Navbar;
