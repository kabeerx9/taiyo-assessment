import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

interface SidebarProps {
	isOpen: boolean;
	closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
	return (
		<>
			{/* In mobile siebar using this div as overlay for closing the sidebar when open  */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
					onClick={closeSidebar}></div>
			)}

			{/* common for both mobile and desktop sidebar */}

			<div
				className={`fixed inset-y-0 left-0 transform ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} w-72 bg-indigo-100 text-indigo-900 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 z-30 shadow-lg`}>
				<div className="flex items-center justify-between h-20 bg-indigo-200 px-6 lg:px-8">
					<h2 className="text-2xl font-bold text-indigo-800">Taiyo.AI</h2>
					<button
						className="text-indigo-800 hover:text-indigo-600 transition-colors duration-200 lg:hidden"
						onClick={closeSidebar}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<nav className="mt-8 px-4">
					{routes.map((route) => (
						<NavLink
							key={route.path}
							to={route.path}
							className={({ isActive }) =>
								`flex items-center px-4 py-3 mt-2 transition-all duration-200 rounded-lg ${
									isActive
										? 'bg-indigo-200 text-indigo-900 font-semibold shadow-md'
										: 'text-indigo-700 hover:bg-indigo-200 hover:text-indigo-900'
								}`
							}
							onClick={() => {
								if (window.innerWidth < 1024) {
									closeSidebar();
								}
							}}>
							<span className="mr-3 text-xl">{route.icon}</span>
							<span className="text-sm">{route.name}</span>
						</NavLink>
					))}
				</nav>
			</div>
		</>
	);
};

export default Sidebar;
