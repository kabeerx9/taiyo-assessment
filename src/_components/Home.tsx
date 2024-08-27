import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Button from '../components/ui/button';

type Props = {};

const Home = (props: Props) => {
	const { data, isLoading, refetch, isRefetching } = useQuery({
		queryFn: async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/posts');
			return res.json();
		},
		queryKey: ['testing'],
		staleTime: 1000,
	});

	if (isLoading)
		return (
			<div className="w-full h-full flex justify-center items-center text-2xl font-bold">
				Loading...
			</div>
		);
	if (isRefetching)
		return (
			<div className="w-full h-full flex justify-center items-center text-2xl font-bold">
				Refetching...
			</div>
		);

		

	return (
		<div className="w-full h-full">
			Hello welcome to the assignment done by kabeer
			<Button
				variant="primary"
				onClick={() => {
					refetch();
				}}>
				Refetch data
			</Button>
		</div>
	);
};

export default Home;
