import { Fragment } from 'react';
import Product from './components/Product/Product';
import AppRouter from './pages/routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Fragment>
			<Navbar />
			<main className="py-5">
				<Product discount={true} />
				<AppRouter />
			</main>
			<Footer />
		</Fragment>
	);
}

export default App;
