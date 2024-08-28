import { useQuery } from '@tanstack/react-query';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { ReactLeafletShimmer } from '../shimmer/react-leaflet-shimmer';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: markerIcon2x,
	iconUrl: markerIcon,
	shadowUrl: markerShadow,
});

type Country = {
	country: string;
	countryInfo: {
		lat: number;
		long: number;
	};
	active: number;
	recovered: number;
	deaths: number;
};

interface CountryMakerProps {
	country: Country;
}

interface CovidMapProps {
	countries: Country[];
}

const COUNTRIES_DATA_URL = 'https://disease.sh/v3/covid-19/countries';

const fetchCountriesData = async (): Promise<Country[]> => {
	const response = await fetch(COUNTRIES_DATA_URL);
	return response.json();
};

const CountryMarker = ({ country }: CountryMakerProps) => (
	<Marker position={[country.countryInfo.lat, country.countryInfo.long]}>
		<Popup>
			<div>
				<h3>{country.country}</h3>
				<p>Active cases: {country.active}</p>
				<p>Recovered: {country.recovered}</p>
				<p>Deaths: {country.deaths}</p>
			</div>
		</Popup>
	</Marker>
);

const CovidMap = ({ countries }: CovidMapProps) => (
	<>
		<h1 className="mb-5 text-lg lg:text-2xl text-center text-indigo-800 underline font-semibold">
			Leaflet showing covid data for countries.
		</h1>
		<MapContainer center={[20, 0]} zoom={2}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{countries.map((country) => (
				<CountryMarker key={country.country} country={country} />
			))}
		</MapContainer>
	</>
);

const CountrySpecificLeaflet: React.FC = () => {
	const { data: countries, isLoading } = useQuery<Country[]>({
		queryFn: fetchCountriesData,
		queryKey: ['countries'],
		staleTime: Infinity,
	});

	return (
		<div className="border-2 border-black rounded-lg p-2 shadow-lg">
			{isLoading ? (
				<ReactLeafletShimmer />
			) : (
				countries && <CovidMap countries={countries} />
			)}
		</div>
	);
};

export default CountrySpecificLeaflet;
