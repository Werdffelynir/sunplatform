<template>
    <div class="container">
        <h2>Profile settings</h2>

        <VCard :color="item.color" dark>
            <VListItem three-line>
                <VListItemContent class="align-self-start">
                    <VListItemTitle class="headline mb-2" v-text="showName"></VListItemTitle>

                    alias <VListItemSubtitle v-text="item.alias"></VListItemSubtitle>
                    dns 1 <VListItemSubtitle v-text="item.dns_1"></VListItemSubtitle>
                    dns 2<VListItemSubtitle v-text="item.dns_2"></VListItemSubtitle>

                    <VCardActions>
                        <VBtn text>Edit</VBtn>
                    </VCardActions>

                </VListItemContent>

                <VListItemAvatar size="125" tile>
                    <v-img :src="item.src"></v-img>
                </VListItemAvatar>
            </VListItem>
        </VCard>

    </div>
</template>
<script>

    import avatar from '../../../../resources/assets/images/avatar.png';
    import store from '../../store/DomainModule';

    export default {
        name: 'servicessettings-component',
        mounted() {
            console.log('Component mounted.')
        },
        computed: {
            showName() {
                return store.state.domainName;
            }
        },
        data() {
            return {
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
