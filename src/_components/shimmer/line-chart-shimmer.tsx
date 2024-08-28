import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
} from 'recharts';

export const LineChartSkeleton = () => {
	const dummyData = Array(7)
		.fill(null)
		.map((_, index) => ({
			name: `Day ${index + 1}`,
			value: Math.random() * 100,
		}));

	return (
		<div className="w-full h-64 bg-white rounded-lg shadow-md overflow-hidden">
			<div className="p-4">
				<div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse mb-4"></div>
				<ResponsiveContainer width="100%" height={200}>
					<LineChart data={dummyData}>
						<CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
						<XAxis dataKey="name" tick={false} />
						<YAxis tick={false} />
						<Line
							type="monotone"
							dataKey="value"
							stroke="#e0e0e0"
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};
