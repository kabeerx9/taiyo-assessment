import CountrySpecificLeaflet from './charts-and-maps/country-specific-leaflet';
import CovidLineGraph from './charts-and-maps/covid-line-graph';
import CovidStatsGraph from './charts-and-maps/covid-stats-graph';
import Temp from './charts-and-maps/temp';

type Props = {};

const ChartsAndMaps = (props: Props) => {
	return (
		<div className="w-full h-full px-4 bg-white">
			<CovidLineGraph />

			<div className="my-20" />
			{/* <Temp /> */}
			{/* The First api endpoint provided for all cases in the world , i have no
			idea how to use it and what is the use as in the final deliverables it is
			not mentioned anywhere . So i have created a component , but not rendering
			it .
			 */}
			{/* <CovidStatsGraph /> */}

			<CountrySpecificLeaflet />
		</div>
	);
};

export default ChartsAndMaps;
