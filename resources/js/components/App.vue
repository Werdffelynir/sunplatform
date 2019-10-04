<template>
    <VApp>
        <div v-if="isAuth">
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

        <VContent class="content-main pr-4">
            <VContainer class="container-main" fluid>
                <router-view></router-view>
            </VContainer>
        </VContent>

        <VFooter app>
            <div class="copy text-right"><span>SunLight</span> Development &copy; 2019 </div>
        </VFooter>

        <notification-component />

    </VApp>
</template>


<script>
    import NotificationComponent from './common/Notification.vue';
    import SidebarComponent from './common/Sidebar.vue';
    import MenuComponent from './common/Menu.vue';
    import {getCredentials, hasUserCredentials, init} from '../services/auth.service';
    import {setNotificationWithError} from '../services/base.service';

    export default {
        name: 'app-component',

        props: ['csrf'],

        mounted () {
            init();
        },

        data (vueAppComponent) {
            return {
                sidebar: true,
            };
        },

        methods: {
            sidebarToggle() {
                setNotificationWithError('Free space desktop');
                this.sidebar = !this.sidebar
            },
        },

        watch: {},

        computed: {
            isAuth() {
                return hasUserCredentials()
            },
        },

        components: {
            'notification-component': NotificationComponent,
            'sidebar-component': SidebarComponent,
            'menu-component': MenuComponent,
        },

    }
</script>
