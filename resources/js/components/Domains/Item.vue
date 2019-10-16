<template>
    <VCard class="domain">
        <VCardTitle>
            <span :class="'icon active' + (domain.status ? '':' off')"></span>
            <span class="address">
                {{domain.address}}
                <span class="red--text">[Domain is not confirmed]</span>
            </span>
        </VCardTitle>
        <VCardText>
            <VRow>
                <VCol cols="6">
                    <h3>Domain properties</h3>
                    <p>For change settings (name domain name) go to action button</p>
                    <ul class="descriptions">
                        <li><VIcon>mdi-menu-right</VIcon><strong>Register to:</strong> {{user.name}} </li>
                        <li><VIcon>mdi-menu-right</VIcon><strong>Address:</strong> {{domain.address}}</li>
                        <li><VIcon>mdi-menu-right</VIcon><strong>Status:</strong>
                            <span v-if="domain.status">[ACTIVE]</span>
                            <span v-else>[OFFLINE]</span>
                        </li>
                        <li><VIcon>mdi-menu-right</VIcon><strong>Limit date:</strong> {{domain.actived_to}} </li>
                        <li><VIcon>mdi-menu-right</VIcon><strong>Created date:</strong> {{domain.created_at}} </li>
                    </ul>
                </VCol>
                <VCol cols="6">
                    <h3>Included services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aspernatur aut cum dicta doloremque dolorum eius esse,
                        facere, incidunt porro quas repellat,</p>
                    <VList dense nav>
                        <VListItem link v-for="item in domain.services" :key="item.id">
                            <VListItemIcon>
                                <VIcon>mdi-location-enter</VIcon>
                            </VListItemIcon>
                            <VListItemContent>
                                <VListItemTitle>{{item.name}}</VListItemTitle>
                            </VListItemContent>
                        </VListItem>
                    </VList>
                </VCol>
            </VRow>
        </VCardText>
        <VCardActions>
            <router-link :to="'/domains/settings/' + domain.id">
                <VBtn primary >Edit Settings</VBtn>
            </router-link>
            <VBtn text>Off (all services will be turn down)</VBtn>
        </VCardActions>
    </VCard>
</template>
<script>
    import {getterWithModule} from '../../store/getterWith';
    import {GET_USER} from '../../store/Profile/getters';

    export default {
        name: 'domain-item-component',
        props: ['domain'],
        mounted() {},
        data() {
            return {};
        },
        methods: {},
        computed: {
            user () {
                return getterWithModule('profile', GET_USER);
            },
        },
    }

/*
actived_to: null
address: "your-domain.com"
created_at: "2019-10-02 18:42:31"
id: 1
id_service: null
id_user: 3
status: 1
*/
</script>
<style>
    .domain {
        margin-bottom: 20px;
    }
    .address {
        padding-left: 20px;
    }
    .active {
        width: 36px;
        height: 36px;
        max-width: 36px;
        max-height: 36px;
        background-color: darkorange;
        border-radius: 50%;
        display: inline-block;
    }
    .off {
        background-color: black;
    }
    .descriptions {
        margin: 0px 10px;
        padding-top: 25px;
        list-style: none;
    }
</style>
