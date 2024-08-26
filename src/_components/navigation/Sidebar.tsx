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
			{/* Is needed to close the sidebar on clicking outside of the sidebar in mobile view. */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
					onClick={closeSidebar}></div>
			)}

			{/* COMMON FOR BOTH  */}

			<div
				className={`fixed inset-y-0 left-0 transform ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} w-64 bg-blue-600 text-white transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 z-30`}>
				<div className="flex items-center justify-between h-16 bg-blue-700 px-4 lg:hidden">
					<h2 className=" text-2xl font-bold">Taiyo.AI</h2>
					<button className="text-white lg:hidden" onClick={closeSidebar}>
						✕
					</button>
				</div>
				<nav className="mt-8">
					{routes.map((route) => (
						<NavLink
							key={route.path}
							to={route.path}
							className={({ isActive }) =>
								`flex items-center px-6 py-2 mt-4 duration-200 border-l-4 ${
									isActive
										? 'border-white bg-blue-700'
										: 'border-blue-600 hover:bg-blue-700 hover:border-white'
								}`
							}
							onClick={() => {
								if (window.innerWidth < 1024) {
									closeSidebar();
								}
							}}>
							<span className="mr-2">{route.icon}</span>
							{route.name}
						</NavLink>
					))}
				</nav>
			</div>
		</>
	);
};

export default Sidebar;
