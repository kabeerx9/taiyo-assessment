import { useQuery } from '@tanstack/react-query';

type Props = {};

const COUNTRIES_DATA_API = 'https://disease.sh/v3/covid-19/countries';

const CountrySpecificLeaflet = (props: Props) => {
	const fetchCountriesData = async () => {
		const res = await fetch(COUNTRIES_DATA_API);

		if (!res.ok) {
			throw new Error('Something went wrong');
		}

		return res.json();
	};

	const { data, isLoading } = useQuery({
		queryFn: fetchCountriesData,
		queryKey: ['countries-data'],
		staleTime: Infinity,
	});

	if (isLoading) {
		return (
			<div className="w-full h-full flex items-center justify-center text-2xl">
				Loading..
			</div>
		);
	}

	console.log('Data is ', data);

	return <div>LeafletData</div>;
};

export default CountrySpecificLeaflet;
