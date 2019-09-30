<template>
    <div class="container">

        <VToolbar>
            <VToolbarTitle>Registered Domains</VToolbarTitle>
            <div class="flex-grow-1"></div>
            <VToolbarItems></VToolbarItems>
            <router-link to="/domains/register">
            <VBtn icon>
                <VIcon>mdi-plus-circle</VIcon>
            </VBtn>
            </router-link>
        </VToolbar>

        <VRow v-for="domain in domains" :key="domain.domain + domain.id">
            <VCol>
                <VCard>
                    <VCardTitle>{{domain.domain}}</VCardTitle>
                    <VCardText class="pb-0">active: {{domain.active}}</VCardText>
                    <VCardText class="pt-0 pb-0">created at: {{domain.create_at}}</VCardText>
                    <VCardText class="pt-0">active to: {{domain.active_to}}</VCardText>
                    <VDivider></VDivider>
                    <VCardActions>
                       <VBtn text v-on:click="navigateToDomainSettings">Settings</VBtn>
                    </VCardActions>
                </VCard>
            </VCol>
            <VCol>
                <VCard color="#37474F">
                    <VCardTitle>Services</VCardTitle>
                    <VDivider></VDivider>
                    <VRow class="no-gutters" v-for="service in services" :key="service.id">
                        <VCol>
                        <VCardActions>
                            <VBtn text v-on:click="navigateToServiceSettings"><VIcon>mdi-settings</VIcon></VBtn>
                        </VCardActions>
                        </VCol>
                        <VCol><VCardText>{{service.name}}</VCardText></VCol>
                        <VCol><VCardText>{{service.active}}</VCardText></VCol>
                    </VRow>
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
            return {

            }
        },
        methods: {
            navigateToDomainSettings() {
                this.$router.push('domains/settings')
            },
            navigateToServiceSettings() {
                this.$router.push('services/settings')
            }
        },
        computed: {
            domains () {
                return this.$store.getters['domains/getlist']
            },
            services () {
                let getlist = this.$store.getters['domains/getlist'];
                for (let service of getlist) {
                   return service.services
                }
            }

        },
        mounted() {
            console.log('Component mounted.');
        }
    }
</script>
