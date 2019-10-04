<template>
    <div id="header-menu">

        <VToolbarItems>
            <router-link to="/">
                <VBtn text>dashboard</VBtn>
            </router-link>

            <router-link to="/profile">
                <VBtn text>profile</VBtn>
            </router-link>

            <router-link to="/domains">
                <VBtn text>domains</VBtn>
            </router-link>

            <router-link to="/services">
                <VBtn text>services</VBtn>
            </router-link>

            <router-link to="/login">
                <VBtn text>login</VBtn>
            </router-link>

            <router-link to="/register">
                <VBtn text>register</VBtn>
            </router-link>

            <a href="/" v-on:click="logout">
                <VBtn text>logout</VBtn>
            </a>
        </VToolbarItems>

    </div>
</template>

<script>

    import '../../../sass/components/menu.scss';
    import {makeLogout} from '../../services/auth.service';

    export default {

        name: 'menu-component',

        data() {
            return {
                items: [],
            }
        },

        methods: {
            logout(e) {
                e.preventDefault();
                e.stopPropagation();
                makeLogout()
            },
        },
    }
</script>
