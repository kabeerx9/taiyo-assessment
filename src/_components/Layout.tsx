import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { routes } from '../routes';
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

	const currentRoute = routes.find((route) => route.path === location.pathname);

	return (
		<div className="flex h-screen w-screen">
			<Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
			<div className="flex flex-col w-full ">
				<header className="bg-white shadow-md p-4 flex justify-between items-center border-b-2 border-indigo-200">
					<div className="flex items-center">
						<button className="text-blue-600 lg:hidden" onClick={toggleSidebar}>
							☰
						</button>
					</div>
					<div className="text-xl underline font-semibold text-black ">
						{currentRoute?.name + ' Page' || 'No route '}
					</div>
					<div className="text-blue-600">👤</div>
				</header>
				<div className="flex flex-grow overflow-hidden">
					<main className="flex-grow bg-gray-100 overflow-y-auto ">
						<Outlet />
					</main>
				</div>
			</div>
		</div>
	);
}

export default Layout;
