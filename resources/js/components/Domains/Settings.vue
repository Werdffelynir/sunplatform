<template>
    <VContainer>
        <h2>Domain settings</h2>
        <VCard :color="item.color" dark>
<VRow>
    <VCol>
                    <VTextField
                        label="Domain Alias"
                        placeholder="Type Domain Alias..."
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
            console.log('Component mounted.');
            console.log(this.$store.getters['domains/getIndex'])
        },
        computed: {
          showName() {
              return this.$store.getters['profile/getUser'];
          },
            getIndex() {
              return this.$store.getters['domains/getIndex'];
            }
        },
        data() {
            return {
                switcher: false,
                aliax: this.details,
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
