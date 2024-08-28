export const ReactLeafletShimmer = () => (
	<div className="w-full h-96 bg-white rounded-lg shadow-md overflow-hidden">
		<div className="p-4">
			<div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse mb-4"></div>
			<div className="w-full h-80 bg-gray-100 rounded-lg overflow-hidden relative">
				<div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
				<div className="absolute top-4 left-4 w-20 h-20 bg-white rounded-lg shadow-md"></div>
				<div className="absolute bottom-4 right-4 w-24 h-8 bg-blue-500 rounded-full shadow-md"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full shadow-md"></div>
				<div className="absolute top-1/4 left-1/4 w-6 h-6 bg-green-500 rounded-full shadow-md"></div>
				<div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-yellow-500 rounded-full shadow-md"></div>
			</div>
		</div>
	</div>
);
