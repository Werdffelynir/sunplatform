import DashboardComponent from '../components/Dashboard';
import ProfileComponent from '../components/Profile';
import DomainsComponent from '../components/Domains';
import DomainItemComponent from '../components/Domains/DomainItem';
import DomainsRegisterComponent from '../components/Domains/Register';
import ServicesSettingsComponent from '../components/Services/Settings';
import ServicesComponent from '../components/Services';
import LoginComponent from '../components/auth/Login.vue';
import LogoutComponent from '../components/auth/Logout.vue';
import RegisterComponent from '../components/auth/Register.vue';
import EditorComponent from '../components/Editor';


export const routes = [
    {
        name: 'Login',
        path: '/login',
        component: LoginComponent },
/*    {
        name: 'Logout',
        path: '/logout',
        component: LogoutComponent },*/
    {
        name: 'Register',
        path: '/register',
        component: RegisterComponent },
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
        name: 'DomainsRegister',
        path: '/domains/register',
        component: DomainsRegisterComponent },
    {
        name: 'DomainItem',
        path: '/domains/item',
        props: true,
        component: DomainItemComponent },
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
