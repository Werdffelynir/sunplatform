<template>
    <VCard class="domain">
        <VCardTitle>
            <span :class="'icon active' + (domain.active ? '':' off')"></span>
            <span class="address">http://user-domain.com</span>
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
                            <span v-if="domain.active">[ACTIVE]</span>
                            <span v-else>[OFFLINE]</span>
                        </li>
                        <li><VIcon>mdi-menu-right</VIcon><strong>Limit date:</strong> {{domain.active_to}} </li>
                        <li><VIcon>mdi-menu-right</VIcon><strong>Created date:</strong> {{domain.create_at}} </li>
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
            <VBtn primary >Edit Settings</VBtn>
            <VBtn text>Off (all services will be turn down)</VBtn>
        </VCardActions>
    </VCard>
</template>
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
<script>
    import {getterWithModule} from '../../store/getterWith';
    import {GET_USER} from '../../store/Profile/getters';

    export default {
        name: 'domain-settings-component',
        props: ['domain'],
        mounted() {},
        methods: {},
        computed: {
            user () {
                return getterWithModule('profile', GET_USER);
            },

        },
    }
</script>
