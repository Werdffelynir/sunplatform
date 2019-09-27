import DashboardComponent from './components/Dashboard';
import ProfileComponent from './components/Profile';
import DomainsComponent from './components/Domains';
import DomainsSettingsComponent from './components/Domains/Settings';
import ServicesSettingsComponent from './components/Services/Settings';
import ServicesComponent from './components/Services';
import EditorComponent from './components/Editor';


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
        name: 'ServicesSettings',
        path: '/services/settings',
        component: ServicesSettingsComponent },
    {
        name: 'Services',
        path: '/services',
        component: ServicesComponent },
    {
        name: 'Editor',
        path: '/editor',
        component: EditorComponent }
];

export default routes;
