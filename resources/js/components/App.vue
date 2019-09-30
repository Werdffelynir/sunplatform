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

    export default {
        name: 'app-component',

        props: ['csrf'],

        mounted () {

            // todo: init app. need replace to separate module
            this.$store.subscribe((payload, state) => {
                if(payload.type === "profile/addCredentials") {
                    this.$requester.get('/api/user').then((response)=>{
                        this.$store.commit('profile/addUser', response );
                    }).catch((err)=>{console.log('err', err)})

                }
            });
            const credentials = JSON.parse(localStorage.getItem('credentials'));
            if (credentials) {
                this.$requester.credentials( credentials );
                this.$store.commit('profile/addCredentials', credentials );

            }
        },

        data (vueAppComponent) {
            return {
                columns: [...new Array(16)],
                sidebar: true,
            };
        },

        methods: {
            sidebarToggle() {
                this.sidebar = !this.sidebar;
            },
        },

        watch: {},

        computed: {

            // getters
            isAuth() { return !!this.$store.getters['profile/credentials'].token },
        },

        components: {
            'sidebar-component': SidebarComponent,
            'menu-component': MenuComponent,
        },

    }
</script>
