import { Component, Fragment } from 'react';
import AppRouter from './pages/routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MyCart from './components/MyCart/MyCart';

class App extends Component {
	state = {
		openCart: false,
		cart: [],
	};

	toggleCartHandler = () => {
		this.setState(prevState => {
			return {
				openCart: !prevState.openCart,
			};
		});
	};

	addToCartHandler = product => {
		this.setState(prevState => {
			return {
				cart: [...prevState.cart, product],
			};
		});
	};

	render() {
		const { openCart, cart } = this.state;

		return (
			<Fragment>
				<Navbar toggleCart={this.toggleCartHandler} cartItems={cart} />
				<main className="py-5">
					<AppRouter addToCart={this.addToCartHandler} />
					<MyCart
						cart={cart}
						openCart={openCart}
						toggleCart={this.toggleCartHandler}
					/>
				</main>
				<Footer />
			</Fragment>
		);
	}
}

export default App;
// "homepage": "https://mohamedghaly140.github.io/Shopping-Cart-React/",