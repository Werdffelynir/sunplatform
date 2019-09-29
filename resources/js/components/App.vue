<template>

    <VApp>
        <div v-if="gettersIsAuthorizedUser">
            <VNavigationDrawer app clipped-x :width="sidebar ? 250 : 0">
                <sidebar-component />
            </VNavigationDrawer>

            <VAppBar app>
                <template v-if="$vuetify.breakpoint.smAndUp">
                    <VBtn v-on:click="sidebarToggle">
                        <VIcon>mdi-view-parallel</VIcon>
                    </VBtn>
                    <VBtn v-on:click="initRequest">
                        <VIcon>mdi-server-network</VIcon>
                    </VBtn>
                </template>
                <VSpacer></VSpacer>
                <menu-component />
            </VAppBar>
        </div>

        <VContent class="content-main">
            <VContainer class="container-main" fluid>
                <router-view></router-view>
            </VContainer>
        </VContent>

        <VFooter app>
            <div class="copy text-right"><span>SunLight</span> Development &copy; 2019 </div>
        </VFooter>

    </VApp>
</template>


<script>
    import SidebarComponent from './common/Sidebar.vue';
    import MenuComponent from './common/Menu.vue';
    import {requestPost,requestGet} from '../utils/request';
    // import LoginComponent from './auth/Login.vue';
    // import RegisterComponent from './auth/Register.vue';

    export default {
        name: 'app-component',

        props: ['csrf'],

        mounted () {
            // console.log('gettersIsAuthorizedUser', this.gettersIsAuthorizedUser);
            // console.log('gettersUser', this.gettersUser);
            // if (!this.gettersIsAuthorizedUser && this.$route.path !== '/login') {
            //     // this.$router.push('/login');
            //     // location.href = '/login';
            // }
        },

        data (vueAppComponent) {
            this.$store.subscribe((payload, state) => {
               // if (type === 'profile/addCredentials')
                    console.log('subscribe type >> ', state);
                    console.log('subscribe payload >> ', payload);
                    console.log('subscribe payload >> ', payload.type === "profile/addCredentials" );
            });

            return {
                columns: [...new Array(16)],
                sidebar: true,
            };
        },

        methods: {
            sidebarToggle() {
                this.sidebar = !this.sidebar;
            },
            initRequest() {
                console.log('gettersCredentials', this.gettersCredentials);

                requestGet('/api/profile', null, {}).then((response)=>{
                    console.log('response', response);

                }).catch((err)=>{console.log('err', err)})
            },
        },

        watch: {},

        computed: {

            // getters
            gettersUser() {return this.$store.getters['profile/user']},
            gettersIsAuthorizedUser() {
                return this.$store.getters['profile/isAuthorizedUser'] || true
            },
            gettersCredentials() {return this.$store.getters['profile/credentials']},
        },

        components: {
            'sidebar-component': SidebarComponent,
            'menu-component': MenuComponent,
            // 'login-component': LoginComponent,
            // 'register-component': RegisterComponent,
        },

    }
</script>
