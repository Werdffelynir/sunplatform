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

            <a href="/password/reset" >
                <VBtn text>password/reset</VBtn>
            </a>
            <a href="/login" >
                <VBtn text>login</VBtn>
            </a>
            <a href="/register" >
                <VBtn text>register</VBtn>
            </a>
            <a href="/logout" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                <VBtn text>logout</VBtn>
            </a>
        </VToolbarItems>

    </div>
</template>

<script>

    import '../../../sass/components/menu.scss';

    export default {

        name: 'menu-component',

        data() {
            return {
                items: [],
            }
        },
    }
</script>
