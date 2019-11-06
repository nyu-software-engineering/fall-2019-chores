import Dashboard from './views/Dashboard.jsx';
import UserProfile from './views/UserProfile.jsx';
import TableList from './views/TableList.jsx';
import Notifications from './views/Notifications.jsx';

const dashboardRoutes = [
   {
      path: '/dashboard',
      name: 'Dashboard',
      icon: 'pe-7s-graph',
      component: Dashboard,
      layout: '/admin',
   },
   {
      path: '/user',
      name: 'User Profile',
      icon: 'pe-7s-user',
      component: UserProfile,
      layout: '/admin',
   },
   {
      path: '/table',
      name: 'Table List',
      icon: 'pe-7s-note2',
      component: TableList,
      layout: '/admin',
   },
   {
      path: '/notifications',
      name: 'Notifications',
      icon: 'pe-7s-bell',
      component: Notifications,
      layout: '/admin',
   },
];

export default dashboardRoutes;
