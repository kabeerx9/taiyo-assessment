import CountrySpecificLeaflet from './charts-and-maps/country-specific-leaflet';
import CovidLineGraph from './charts-and-maps/covid-line-graph';
import CovidStatsGraph from './charts-and-maps/covid-stats-graph';

type Props = {};

const ChartsAndMaps = (props: Props) => {
	return (
		<div className="w-full h-full  flex flex-col gap-10 px-4">
			<div className="text-center font-semibold text-xl">
				Charts and Maps Page
			</div>
			<CovidLineGraph />
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
