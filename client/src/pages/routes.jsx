import { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
const ProductDetails = lazy(() => import('./ProductDetails'));

class AppRouter extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Suspense fallback="...loading">
						<Route path="/product/:id">
							<ProductDetails addToCart={this.props.addToCart} />
						</Route>
					</Suspense>
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default AppRouter;
