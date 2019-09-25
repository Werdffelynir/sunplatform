import DashboardComponent from './components/Dashboard';
import ProfileComponent from './components/Profile';
import DomainsComponent from './components/Domains';
import DomainsEditComponent from './components/DomainsEdit';
import ServicesComponent from './components/Services';
import ServiceDatabaseMysql from './components/ServiceDatabaseMysql';
import ServiceDatabaseSqlite from './components/ServiceDatabaseSqlite';


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
        name: 'DomainsEdit',
        path: '/domainsedit',
        component: DomainsEditComponent },
    {
        name: 'Services',
        path: '/services',
        component: ServicesComponent },
    {
        name: 'Service Database Mysql',
        path: '/service/database/mysqli',
        component: ServiceDatabaseMysql },
    {
        name: 'Service Database Sqlite',
        path: '/service/database/sqlite',
        component: ServiceDatabaseSqlite },
];

export default routes;
