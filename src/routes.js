import HomePage from './views/HomePage';
import HousesList from './views/HousesList';
import ChoresList from './views/ChoresList';
import Notifications from './views/Notifications';
import UpdateAccount from './views/UpdateAccount';

const homeRoutes = [
   {
      path: '/dashboard',
      name: 'Home',
      component: HomePage,
      layout: '/admin',
   },
   {
      path: '/myhouses',
      name: 'My Houses',
      component: HousesList,
      layout: '/admin',
   },
   {
      path: '/mychores',
      name: 'My Chores',
      component: ChoresList,
      layout: '/admin',
   },
   {
      path: '/myaccount',
      name: 'My Account',
      component: UpdateAccount,
      layout: '/admin',
   },
   {
      path: '/login',
      name: 'Logout',
      // component: Login,
      layout: '/admin',
   },
];

export default homeRoutes;
