import { Component, Fragment } from 'react';
import AppRouter from './pages/routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MyCart from './components/MyCart/MyCart';

class App extends Component {
	state = {
		openCart: false,
	};

	toggleCart = () => {
		this.setState(prevState => {
			return {
				openCart: !prevState.openCart,
			};
		});
	};

	render() {
		const { openCart } = this.state;

		return (
			<Fragment>
				<Navbar toggleCart={this.toggleCart} />
				<main className="py-5">
					<AppRouter />
					<MyCart openCart={openCart} toggleCart={this.toggleCart} />
				</main>
				<Footer />
			</Fragment>
		);
	}
}

export default App;
