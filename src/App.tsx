import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './_components/Home';
import Layout from './_components/Layout';
import ChartsAndMaps from './_components/charts-and-maps';
import Contact from './_components/contact';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/charts-and-maps" element={<ChartsAndMaps />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
