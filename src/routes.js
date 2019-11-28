import HomePage from './views/HomePage';
import HousesList from './views/HousesList';
import ChoresList from './views/ChoresList';
import Notifications from './views/Notifications';
import UpdateAccount from './views/UpdateAccount';
import Login from './views/Login';
import Admin from './layouts/Admin';
import Signup from './views/Signup';

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
      name: 'Login',
      component: Login,
      layout: '/admin',
   },
   {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      layout: '/admin',
   },
];

export default homeRoutes;
