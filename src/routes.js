import HomePage from './views/HomePage.jsx';
import UserProfile from './views/UserProfile.jsx';
import TableList from './views/TableList.jsx';
import Notifications from './views/Notifications.jsx';

const homeRoutes = [
   {
      path: '/dashboard',
      name: 'Home',
      component: HomePage,
      layout: '/admin',
   },
   {
      path: '/user',
      name: 'My Houses',
      component: UserProfile,
      layout: '/admin',
   },
   {
      path: '/table',
      name: 'My Chores',
      component: TableList,
      layout: '/admin',
   },
   {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications,
      layout: '/admin',
   },
];

export default homeRoutes;
