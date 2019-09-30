<template>
</template>
<script>
    import { requestPost } from '../../utils/request';

    export default {

        name: 'login-component',

        props: ['csrf'],

        data () {
            return {}
        },

        methods: {
            send () {
                const data = {
                    email: this.email,
                    password: this.password,
                };

                requestPost('/api/login', data)
                    .then(response => { })
                    .catch(error => { });
            },

            // getters
            gettersIsAuthorizedUser() {return this.$store.getters['profile/isAuthorizedUser']},
            // mutations
            mutationsAddCredentials(payload) {this.$store.commit('profile/addCredentials', payload)},
        },

        mounted() {
            localStorage.removeItem('credentials')
        },

        watch: {},

        computed: {},

        components: {},
    }
</script>
