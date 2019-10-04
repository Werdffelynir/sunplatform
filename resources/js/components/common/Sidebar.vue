<template>
    <div class="sb">

        <div class="sb-container">
            <h3 class="sb-title">Profile</h3>

            <VRow class="sb-user-avatar" justify="space-around">
                <avatar-component />
            </VRow>
            <div class="sb-user-description text-center">
                <div>{{user.real_name || user.name}}</div>
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
    import Avatar from '../common/Avatar';
    import {GET_USER} from '../../store/Profile/getters';

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

        mounted: function() { },

        computed: {
            user: function () {
                return this.$store.getters['profile/' + GET_USER]
            }
        },

        components: {
            'avatar-component': Avatar,
        }

    }
</script>
