import { useQuery } from '@tanstack/react-query';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const COUNTRIES_DATA_URL = 'https://disease.sh/v3/covid-19/countries';

const fetchCountriesData = async () => {
	const response = await fetch(COUNTRIES_DATA_URL);
	const data = await response.json();
	return data;
};

const CovidMap = () => {
	const { data: countries, isLoading } = useQuery({
		queryFn: fetchCountriesData,
		queryKey: ['countries'],
		staleTime: Infinity,
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!countries) {
		return <div>No data available</div>;
	}

	return (
		<MapContainer center={[20, 0]} zoom={2}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{countries?.map((country) => (
				<Marker
					key={country.country}
					position={[country.countryInfo.lat, country.countryInfo.long]}>
					<Popup>
						<div>
							<h3>{country.country}</h3>
							<p>Active cases: {country.active}</p>
							<p>Recovered: {country.recovered}</p>
							<p>Deaths: {country.deaths}</p>
						</div>
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};

export default CovidMap;
