<template>
    <div>
        <service-toolbar-component
            title="Registered Domains">
            <VTooltip bottom>
                <template v-slot:activator="{ on }">
                    <router-link to="/domains/register">
                        <VBtn>
                            <VIcon color="primary" dark v-on="on">mdi-plus-circle</VIcon>
                            <span>Add new domain</span>
                        </VBtn>
                    </router-link>
                </template>
                <span>Add new domain, (Lorem ipsum dolor sit amet.)</span>
            </VTooltip>
        </service-toolbar-component>

        <div v-for="domain in domains" :key="domain.id" >
            <h1>{{domain.id}}}</h1>
            <domain-settings-component :domain="domain"/>
        </div>

    </div>
</template>
<style>
    .domains {
        width: 100%;
        padding: 0 2rem 0 1rem;
    }
    .toolbar-title { }
    .toolbar-title span {
        font-size: 36px;
        font-family: "Nunito", "Roboto", sans-serif;
        padding-left: 10px;
    }
    .toolbar-actions {
        font-size: 30px;
        padding-left: 10px;
        padding-right: 20px;
    }
</style>
<script>

    import Settings from "./Settings"
    import { mapMutations } from 'vuex';
    import {GET_DOMAINS_LIST} from '../../store/Domains/getters';
    import ServiceToolbarComponent from '../common/ServiceToolbar';
    import DomainSettingsComponent from './Settings';
    import {loadUserDomainsService} from '../../services/domains.service';
    import {getterWithModule} from '../../store/getterWith';

    export default {
        name: 'domains-component',

        components: {
            'service-toolbar-component': ServiceToolbarComponent,
            'domain-settings-component': DomainSettingsComponent,
        },
        data () {
            return {
                domainsList: [],
            }
        },
        methods: {
/*            ...mapMutations('domains', ['setIndex']),
            navigateToDomainSettings(id) {
                this.$router.push('domains/settings')
                this.setIndex(id);
            },
            navigateToServiceSettings() {
                this.$router.push('services/settings')
            }*/
        },
        computed: {
            domains () {
                return getterWithModule('domains', GET_DOMAINS_LIST);
            },
        },
        mounted() {
            loadUserDomainsService();
        }
    }
</script>
