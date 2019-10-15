import DashboardComponent from '../resources/js/components/Dashboard/index';
import ProfileComponent from '../resources/js/components/Profile/index';
import DomainsComponent from '../resources/js/components/Domains/index';
import DomainsSettingsComponent from '../resources/js/components/Domains/Settings';
import DomainsRegisterComponent from '../resources/js/components/Domains/Register';
import ServicesSettingsComponent from '../resources/js/components/Services/Settings';
import ServicesComponent from '../resources/js/components/Services/index';
import LoginComponent from '../resources/js/components/auth/Login.vue';
import LogoutComponent from '../resources/js/components/auth/Logout.vue';
import RegisterComponent from '../resources/js/components/auth/Register.vue';
import EditorComponent from '../resources/js/components/Editor/index';


const routesOld2 = [
    {
        name: 'Login',
        path: '/login',
        component: LoginComponent },
    {
        name: 'Logout',
        path: '/logout',
        component: LogoutComponent },
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
        name: 'DomainsSettings',
        path: '/domains/settings',
        props: true,
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

export default routesOld2;
