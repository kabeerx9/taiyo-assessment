import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ChartLine } from 'lucide-react';

const Home = () => {
	return (
		<div className="w-full min-h-screen bg-gray-50 text-gray-800 p-6">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-5xl font-bold text-indigo-600 mb-6 text-center">
					Contact Management App
				</h1>

				<div className="bg-white rounded-lg shadow-lg p-6 mb-8">
					<p className="text-lg mb-4">
						Welcome to this application, developed as part of a frontend
						assessment. It showcases various features and technologies in web
						development.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 mb-8">
					<div className="bg-white rounded-lg shadow-lg p-6">
						<h2 className="text-2xl font-semibold text-indigo-500 mb-4 flex items-center">
							<Phone className="mr-2" /> Key Features
						</h2>
						<ul className="space-y-2 ml-4">
							<li className="flex items-center">
								<ArrowRight size={16} className="mr-2 text-indigo-400" />{' '}
								Contact management (add, edit, delete)
							</li>
							<li className="flex items-center">
								<ArrowRight size={16} className="mr-2 text-indigo-400" />{' '}
								COVID-19 statistics dashboard
							</li>
							<li className="flex items-center">
								<ArrowRight size={16} className="mr-2 text-indigo-400" />{' '}
								Responsive design
							</li>
						</ul>
					</div>

					<div className="bg-white rounded-lg shadow-lg p-6">
						<h2 className="text-2xl font-semibold text-indigo-500 mb-4 flex items-center">
							<ChartLine className="mr-2" /> Technologies Used
						</h2>
						<ul className="space-y-2 ml-4">
							<li className="flex items-center">
								<ArrowRight size={16} className="mr-2 text-indigo-400" />{' '}
								React.js with TypeScript
							</li>
							<li className="flex items-center">
								<ArrowRight size={16} className="mr-2 text-indigo-400" />{' '}
								Tailwind CSS
							</li>
							<li className="flex items-center">
								<ArrowRight size={16} className="mr-2 text-indigo-400" /> React
								Router v6
							</li>
							<li className="flex items-center">
								<ArrowRight size={16} className="mr-2 text-indigo-400" /> Redux
								for state management
							</li>
							<li className="flex items-center">
								<ArrowRight size={16} className="mr-2 text-indigo-400" />{' '}
								React-Leaflet for maps
							</li>
							<li className="flex items-center">
								<ArrowRight size={16} className="mr-2 text-indigo-400" />{' '}
								Recharts for line charts
							</li>
						</ul>
					</div>
				</div>

				<div className="bg-white rounded-lg shadow-lg p-6 mb-8">
					<p className="text-lg mb-4">
						To explore the app, use the sidebar on desktop or click the menu
						icon on the top left for mobile devices.
					</p>
				</div>

				<div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
					<Link
						to="/contacts"
						className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md">
						Go to Contacts <ArrowRight className="ml-2" size={20} />
					</Link>
					<Link
						to="/charts"
						className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md">
						Go to Charts & Maps <ArrowRight className="ml-2" size={20} />
					</Link>
				</div>

				<div className="mt-8 text-sm text-gray-600 bg-white rounded-lg shadow-lg p-4">
					<p>
						<strong>Note:</strong> This application uses Redux for state
						management for the <b>Contact Page</b> as per the assessment
						requirements. In a ideal scenario with backend API endpoints,
						TanStack Query could also be used for the same <b>Contact page</b>
						{' ,'}
						as they both are kind of doing the same thing and there is no heavy
						client side calculations needed in this case for redux. Tanstack
						query with caching and query invalidation would have been a good
						choice as we are already using tanstack-query for the covid page.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
