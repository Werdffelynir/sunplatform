import DashboardComponent from '../components/Dashboard';
import ProfileComponent from '../components/Profile';
import DomainsComponent from '../components/Domains';
// import DomainItemComponent from '../components/Domains/Item';
import DomainBlankComponent from '../components/Domains/Blank';
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
    {
        name: 'Register',
        path: '/register',
        component: RegisterComponent },
    {
        name: 'Dashboard',
        path: '/',
        component: DashboardComponent },

    /* ---- Profile ---- */

    {
        name: 'Profile',
        path: '/profile',
        component: ProfileComponent },

    /* ---- Domains ---- */

    {
        name: 'Domains',
        path: '/domains',
        component: DomainsComponent },
    {
        name: 'DomainsRegister',
        path: '/domains/register',
        component: DomainsRegisterComponent },
    {
        name: 'DomainBlank',
        path: '/domains/settings/:id',
        component: DomainBlankComponent },

    /* ---- Services ---- */

    {
        name: 'Services',
        path: '/services',
        component: ServicesComponent },
    {
        name: 'ServicesSettings',
        path: '/services/settings',
        component: ServicesSettingsComponent },
    {
        name: 'Editor',
        path: '/editor',
        component: EditorComponent }
];
