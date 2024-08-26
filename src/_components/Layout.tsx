import { Link, Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="bg-green-200 p-4">
				<nav className="text-md md:text-xl font-semibold">
					<ul className="flex space-x-4">
						<li>
							<Link to="/" className="hover:underline">
								Home
							</Link>
						</li>
						<li>
							<Link to="/charts-and-maps" className="hover:underline">
								Charts And Maps
							</Link>
						</li>
						<li>
							<Link to="/contact" className="hover:underline">
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<div className="flex flex-grow">
				<aside className="w-64 bg-gray-100">{/* Sidebar content */}</aside>
				<main className="flex-grow bg-red-200 p-4">
					<Outlet />
				</main>
			</div>
		</div>
	);
}

export default Layout;
