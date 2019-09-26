<template>
    <div class="sb">

        <div class="sb-container">
            <h3 class="sb-title">Profile</h3>

            <VRow justify="space-around">
                <VAvatar color="orange" size="62">
                    <span class="white--text headline">62</span>
                </VAvatar>
            </VRow>
            <div class="text-center">
                <div>{{user.name}}</div>
                <div>{{user.email}}</div>
            </div>
        </div>

        <div class="sb-container">
            <h3 class="sb-title">Domains</h3>
            <ul>
                <li>site-domain.com</li>
                <li>other-user-site.com</li>
            </ul>
        </div>

        <div class="sb-container">
            <h3 class="sb-title">Connected Services</h3>
            <ul>
                <li>Database (MySql)</li>
                <li>Plugin: GeoLocation</li>
            </ul>
        </div>

        <div class="sb-container">
            <h3 class="sb-title">Widgets</h3>
            <VList dense rounded>
                <VListItem>
                    <VListItem>
                        <VListItemIcon>
                            <VIcon>mdi-plus</VIcon>
                        </VListItemIcon>
                        <VListItemContent>
                            <VListItemTitle>Item One</VListItemTitle>
                        </VListItemContent>
                    </VListItem>
                </VListItem>
            </VList>
        </div>
    </div>
</template>
<script>

    import '../../../sass/components/sidebar.scss';

    export default {

        name: 'sidebar-component',

        data() {
            return {
                title: "Component - Sidebar",
                items: [
                    {icon: 'dashboard', title: 'dashboard', to: '/'},
                    {icon: 'dashboard', title: 'tasks', to: '/tasks'},
                    {icon: 'dashboard', title: 'account', to: '/account'},
                ],
            }
        },

        computed: {
            user: function () {
                return this.$store.getters['profile/user']
            }
        },

    }
</script>
