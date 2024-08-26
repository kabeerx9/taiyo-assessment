import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './_components/Layout';
import { routes } from './routes';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					{routes.map((route) => (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					))}
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
