import { useQuery } from '@tanstack/react-query';

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

const COUNTRIES_DATA_API = 'https://disease.sh/v3/covid-19/countries';

const CountrySpecificLeaflet = () => {
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

	return (
		<div className="w-96 h-96">
			{/* //@ts-ignore */}
			<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[51.505, -0.09]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default CountrySpecificLeaflet;
