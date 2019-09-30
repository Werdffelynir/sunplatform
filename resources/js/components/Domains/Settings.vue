<template>
    <VContainer>
        <h2>Domain settings</h2>
        <VCard :color="item.color" dark>
<VRow>
    <VCol>
                    <VTextField
                        label="Domain Name"
                        :placeholder="alias"
                        class="ma-2"
                        hide-details
                    ></VTextField>
    </VCol>
</VRow>
                    <VRow>
                        <VCol>
                    <VSwitch
                        v-model="switcher"
                        class="ma-2"
                        :label="`${switcher ? 'ON' : 'OFF'}`"
                        hide-detail
                    ></VSwitch>
                        </VCol>
                    </VRow>

                    <VCardActions>
                        <VBtn>Save</VBtn>
                    </VCardActions>
        </VCard>

    </VContainer>
</template>
<script>

    import avatar from '../../../../resources/assets/images/avatar.png';

    export default {
        name: 'domainssettings-component',
        mounted() {
            let index = this.$store.getters['domains/getIndex'];
            let list = this.$store.getters['domains/getlist'].filter(list => list.id === index);

            this.alias = list[0].domain;
            this.switcher = list[0].active;
        },
        computed: {
            getIndex() {
              return this.$store.getters['domains/getIndex'];
            }
        },
        data() {
            return {
                switcher: false,
                alias: 'Type Domain Name...',
                item: {
                    color: 'gray',
                    src: avatar,
                    domain: 'Domain 1',
                    alias: 'Domain 1 Alias',
                    dns_1: 'DNS 1',
                    dns_2: 'DNS 2',
                }
            };
        }
    }
</script>
