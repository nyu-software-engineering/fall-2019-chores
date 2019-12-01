import ChoresList from './views/ChoresList';
import HomePage from './views/HomePage';
import HousesList from './views/HousesList';
import UpdateAccount from './views/UpdateAccount';
import Login from './views/Login';
import Admin from './layouts/Admin';
import Signup from './views/Signup';

const homeRoutes = [
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
   {
      path: '/settings',
      name: 'Settings',
      // component: Settings,
      layout: '/app',
   },
   {
      path: '/login',
      name: 'Logout',
      component: Login,
      layout: '/app',
   },
   {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      layout: '/app',
   },
];

export default homeRoutes;
