<template>
    <VApp>
        <VNavigationDrawer app clipped-x :width="sidebar ? 250 : 0">
            <sidebar-component />
        </VNavigationDrawer>

        <VAppBar app >
            <template v-if="$vuetify.breakpoint.smAndUp">
                <VBtn v-on:click="sidebarToggle">
                    <VIcon>mdi-view-parallel</VIcon>
                </VBtn>
            </template>
            <VSpacer></VSpacer>

            <menu-component />

        </VAppBar>

        <VContent>
            <VContainer fluid>

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

        data: (vueAppComponent) => {
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

        watch: {
            input_event(value) {
            }
        },

        computed: {},
        components: {
            'sidebar-component': SidebarComponent,
            'menu-component': MenuComponent,
        },

    }
</script>
