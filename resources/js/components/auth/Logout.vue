<template>
</template>
<script>
    export default {

        name: 'login-component',

        props: ['csrf'],

        data () {
            return {}
        },

        methods: {
            send () { },
        },

        mounted() {
            localStorage.removeItem('credentials')
        },

        watch: {},

        computed: {},

        components: {},
    }
</script>
