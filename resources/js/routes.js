import DashboardComponent from './components/Dashboard';
import ProfileComponent from './components/Profile';
import DomainsComponent from './components/Domains';
import DomainsSettingsComponent from './components/Domains';
import ServicesComponent from './components/Services';


const routes = [
    {
        name: 'Dashboard',
        path: '/',
        component: DashboardComponent },
    {
        name: 'Profile',
        path: '/profile',
        component: ProfileComponent },
    {
        name: 'Domains',
        path: '/domains',
        component: DomainsComponent },
    {
        name: 'DomainsSettings',
        path: '/domains/settings',
        component: DomainsSettingsComponent },
    {
        name: 'Services',
        path: '/services',
        component: ServicesComponent }
];

export default routes;
