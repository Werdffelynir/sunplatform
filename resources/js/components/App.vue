<template>

    <VApp>
        <div v-if="isAuthorizedUser">
            <VNavigationDrawer app clipped-x :width="sidebar ? 250 : 0">
                <sidebar-component />
            </VNavigationDrawer>

            <VAppBar app>
                <template v-if="$vuetify.breakpoint.smAndUp">
                    <VBtn v-on:click="sidebarToggle">
                        <VIcon>mdi-view-parallel</VIcon>
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
    // import LoginComponent from './auth/Login.vue';
    // import RegisterComponent from './auth/Register.vue';

    export default {
        name: 'app-component',

        props: ['csrf', 'component'],

        mounted () {
/*            this.$store.commit('profile/adduser',
                JSON.parse(this.userData),
                { root: true } );

            this.$store.commit('profile/addtoken',
                this.csrfToken,
                { root: true } );*/
        },

        data (vueAppComponent) {
            return {
                columns: [...new Array(16)],
                sidebar: true,
                // component: this.component,
                // csrf: this.csrf,
                path: this.$route.path,
            };
        },

        methods: {
            sidebarToggle() {
                this.sidebar = !this.sidebar;
            },
        },

        // watch: {
        //     input_event(value) {}
        // },

        computed: {
            user: function () {
                return this.$store.getters['profile/user']
            },
            isAuthorizedUser: function () {
                return this.$store.getters['profile/auth'] &&
                    !['/login','/register'].includes(this.path);
            },
        },

        components: {
            'sidebar-component': SidebarComponent,
            'menu-component': MenuComponent,
            // 'login-component': LoginComponent,
            // 'register-component': RegisterComponent,
        },

    }
</script>
