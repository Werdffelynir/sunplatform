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

            <router-link to="/logout" @click="logout">
                <VBtn text>logout</VBtn>
            </router-link>
        </VToolbarItems>

    </div>
</template>

<script>

    import '../../../sass/components/menu.scss';
    import { requestPost } from '../../utils/request';

    export default {

        name: 'menu-component',

        data() {
            return {
                items: [],
            }
        },

        methods: {
            logout (){
                localStorage.removeItem('credentials')
/*                const token = this.$store.getters['profile/token'];
                if (token.length > 20) {
                    // postData('/logout', {
                    //     _token: token,
                    // }).then(data => {
                    //     location.href = '/login';
                    // }).catch(error => {console.log('ERROR:', error)});
                }*/
            },
        },
    }
</script>
