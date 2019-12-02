import ChoresList from './views/ChoresList';
import HomePage from './views/HomePage';
import HousesList from './views/HousesList';
import Login from './views/Login';
import Signup from './views/Signup';
import UpdateAccount from './views/UpdateAccount';

import household from './household.js';

const homeRoutes = [
   {
      path: '/home',
      name: 'Home',
      component: HomePage,
      layout: '/app',
      props: { household },
   },
   {
      path: '/myhouses',
      name: 'My Houses',
      component: HousesList,
      layout: '/app',
      props: { household },
   },
   {
      path: '/mychores',
      name: 'My Chores',
      component: ChoresList,
      layout: '/app',
      props: { household },
   },
   {
      path: '/myaccount',
      name: 'My Account',
      component: UpdateAccount,
      layout: '/app',
      props: { household },
   },
   {
      path: '/settings',
      name: 'Settings',
      // component: Settings,
      layout: '/app',
      props: { household },
   },
   {
      path: '/login',
      name: 'Logout',
      component: Login,
      layout: '/app',
      props: { household },
   },
   {
      path: '/signup',
      name: 'Sign Up',
      component: Signup,
      layout: '/app',
      props: { household },
   },
];

export default homeRoutes;
