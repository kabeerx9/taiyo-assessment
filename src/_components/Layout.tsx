import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './navigation/Sidebar';

function Layout() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const location = useLocation();

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const currentRoute =
		location.pathname === '/'
			? 'Home'
			: location.pathname.slice(1).replace(/-/g, ' ');

	return (
		<div className="flex flex-col min-h-screen">
			<header className="bg-white shadow-md p-4 flex justify-between items-center">
				<div className="flex items-center">
					<button className="text-blue-600 lg:hidden" onClick={toggleSidebar}>
						☰
					</button>
					<h1 className="text-xl font-bold text-blue-600 ml-4">
						Taiyo.AI Assessment
					</h1>
				</div>
				<div className="text-lg font-semibold text-blue-600 hidden md:block">
					{currentRoute}
				</div>
				<div className="text-blue-600">👤</div>
			</header>
			<div className="flex flex-grow">
				<Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
				<main className="flex-grow bg-gray-100 p-4">
					<Outlet />
				</main>
			</div>
		</div>
	);
}

export default Layout;
