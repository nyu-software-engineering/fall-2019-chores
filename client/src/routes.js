import ChoresList from './views/ChoresList';
import HomePage from './views/HomePage';
import HousesList from './views/HousesList';
import Signup from './views/Signup';
import UpdateAccount from './views/UpdateAccount';

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: HomePage,
		layout: '/app',
	},
	{
		path: '/myhouses',
		name: 'My Houses',
		component: HousesList,
		layout: '/app',
	},
	{
		path: '/mychores',
		name: 'My Chores',
		component: ChoresList,
		layout: '/app',
	},
	{
		path: '/myaccount',
		name: 'My Account',
		component: UpdateAccount,
		layout: '/app',
	},
];

export default routes;
