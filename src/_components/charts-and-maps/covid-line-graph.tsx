import { useQuery } from '@tanstack/react-query';
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

interface HistoricalDataProps {
	cases: Record<string, number>;
	deaths: Record<string, number>;
}

const CASES_WITH_DATE_API =
	'https://disease.sh/v3/covid-19/historical/all?lastdays=all';

const CovidLineGraph = () => {
	const fetchHistoricalData = async () => {
		const res = await fetch(CASES_WITH_DATE_API);

		if (!res.ok) {
			throw new Error('Something went wrong');
		}

		return res.json();
	};

	const { data, isLoading, error } = useQuery<HistoricalDataProps>({
		queryFn: fetchHistoricalData,
		queryKey: ['historical-data'],
		staleTime: Infinity,
	});

	const processData = () => {
		if (!data) return [];

		const dates = Object.keys(data.cases);
		return dates.map((date) => {
			return {
				date,
				cases: data.cases[date],
				deaths: data.deaths[date],
			};
		});
	};

	const lineGraphData = processData();

	if (isLoading) {
		return (
			<div className="w-full h-full flex items-center justify-center text-2xl">
				Loading..
			</div>
		);
	}
	if (error) return <div>An error occurred</div>;

	console.log('Data is ', data);

	return (
		<div className="border-2 border-black rounded-lg p-2 shadow-lg">
			<ResponsiveContainer width="100%" height={400}>
				<LineChart data={lineGraphData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="date" />
					<YAxis
						tickFormatter={(value) => {
							return value / 1000000 + 'M';
						}}
					/>
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="cases"
						stroke="#8884d8"
						name="Cases"
						dot={false}
						strokeWidth={2}
					/>
					<Line
						type="monotone"
						dataKey="deaths"
						stroke="#82ca9d"
						name="Deaths"
						dot={false}
						strokeWidth={2}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default CovidLineGraph;
