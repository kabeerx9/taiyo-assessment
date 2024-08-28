import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

interface CovidData {
	cases: number;
	deaths: number;
	recovered: number;
	active: number;
}

const COVID_DATA_API = 'https://disease.sh/v3/covid-19/all';

const fetchCovidData = async (): Promise<CovidData> => {
	const response = await fetch(COVID_DATA_API);
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};

const CovidStatsGraph: React.FC = () => {
	const { data, isLoading, error } = useQuery<CovidData>({
		queryFn: fetchCovidData,
		queryKey: ['covidStats'],
		staleTime: Infinity,
	});

	if (isLoading) return <div className="text-center">Loading...</div>;
	if (error)
		return <div className="text-center text-red-500">Error fetching data</div>;
	if (!data) return null;

	const chartData = [
		{ name: 'Total Cases', value: data.cases },
		{ name: 'Deaths', value: data.deaths },
		{ name: 'Recovered', value: data.recovered },
		{ name: 'Active', value: data.active },
	];

	return (
		<div className="w-full h-96 p-4">
			<h2 className="text-2xl font-bold mb-4 text-center">
				COVID-19 Global Statistics
			</h2>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={chartData}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="value" fill="#8884d8" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default CovidStatsGraph;
