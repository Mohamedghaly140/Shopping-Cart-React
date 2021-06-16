import { Fragment } from 'react';
import AppRouter from './pages/routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Fragment>
			<Navbar />
			<main className="py-5">
				<AppRouter />
			</main>
			<Footer />
		</Fragment>
	);
}

export default App;
