<template>
    <div class="container">
        <h2>Domains</h2>

        <VRow justify="space-between" class="grid">
            <div>
                <VAppBarNavIcon>
                    <VIcon>mdi-access-point-network</VIcon>
                </VAppBarNavIcon>
            </div>
        </VRow>

        <VRow justify=" flex-end" v-for="domain in domains" :key="domain.domain + domain.id">
            <VCol >
                <VCard class="mx-auto">
                    <VCardTitle>{{domain.domain}}</VCardTitle>
                    <VCardText>domain card text</VCardText>
                    <VCardActions>
                       <VBtn text v-on="navigateTo">Click</VBtn>
                    </VCardActions>
                </VCard>
            </VCol>
        </VRow>
    </div>
</template>
<style>
    .domains {
        width: 100%;
        padding: 0 2rem 0 1rem;
    }
</style>
<script>

    export default {
        name: 'domains-component',

        components: {

        },

        data () {
            return { }
        },

        methods: {
            navigateTo() {

            }
        },

        computed: {
            domains () {
                return this.$store.getters.domains
            }
        },

        mounted() {
            console.log('Component mounted.');
        }
    }
</script>
