import { useQuery } from '@tanstack/react-query';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// Import marker icons directly
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl; // Ensure this property is deleted to prevent override errors.

L.Icon.Default.mergeOptions({
	iconRetinaUrl: markerIcon2x,
	iconUrl: markerIcon,
	shadowUrl: markerShadow,
});

const COUNTRIES_DATA_URL = 'https://disease.sh/v3/covid-19/countries';

type Country = {
	country: string;
	countryInfo: {
		iso2: string;
		iso3: string;
		_id: number;
		lat: number;
		long: number;
		flag: string;
	};
	cases: number;
	todayCases: number;
	deaths: number;
	todayDeaths: number;
	recovered: number;
	todayRecovered: number;
	active: number;
	critical: number;
	casesPerOneMillion: number;
	deathsPerOneMillion: number;
	tests: number;
	testsPerOneMillion: number;
	population: number;
	continent: string;
	oneCasePerPeople: number;
	oneDeathPerPeople: number;
	oneTestPerPeople: number;
	activePerOneMillion: number;
	recoveredPerOneMillion: number;
	criticalPerOneMillion: number;
};

const fetchCountriesData = async () => {
	const response = await fetch(COUNTRIES_DATA_URL);
	const data = await response.json();
	return data;
};

const CountrySpecificLeaflet = () => {
	const { data: countries, isLoading } = useQuery<Country[]>({
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

export default CountrySpecificLeaflet;
