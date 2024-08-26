import Home from './_components/Home';
import Contact from './_components/contact';
import ChartsAndMaps from './_components/charts-and-maps';

interface IRoute {
	path: string;
	name: string;
	component: React.FC;
	icon: string;
}

export const routes: IRoute[] = [
	{ path: '/', name: 'Home', component: Home, icon: '🏠' },
	{ path: '/contact', name: 'Contact', component: Contact, icon: '📞' },
	{
		path: '/charts-and-maps',
		name: 'Charts and Maps',
		component: ChartsAndMaps,
		icon: '📊',
	},
];
