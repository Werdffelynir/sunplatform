<template>
    <div class="container">

        <VCard dark>

            <VCardText>
                <VForm v-model="valid">
                    <VRow >
                        <VCol cols="1" md="1" align-self="center" class="text-right">
                            <VIcon>mdi-information</VIcon>
                        </VCol>
                        <VCol cols="11" md="6">
                            <h1>Register new Domain name</h1>

                            <p>Sunlight Contest Access Platform software platform for service management in the development process. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet blanditiis doloribus enim iste laborum necessitatibus obcaecati pariatur perferendis praesentium quod ratione ullam, voluptates. Suscipit?</p>
                        </VCol>
                    </VRow>

                    <VRow align="stretch">
                        <VCol cols="1" md="1" align-self="center" class="text-right">
                            <VIcon>mdi-domain</VIcon>
                        </VCol>
                        <VCol cols="11" md="4">
                            <VTextField
                                required
                                v-model="domain"
                                :rules="domainRules"
                                :counter="24"
                                label="Domain name (or IP address)"></VTextField>
                        </VCol>
                    </VRow>

                    <VBtn>Register</VBtn>

                </VForm>

            </VCardText>
        </VCard>

<!--
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
-->

    </div>
</template>
<script>

    import avatar from '../../../../resources/assets/images/avatar.png';
    import store from '../../store/DomainModule';

    export default {

        name: 'domainssettings-component',

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
                valid: '',
                domain: '',
                domainRules: [
                    function (v){
                        return /\w+\.\w{2,}/.test(v) && v.length > 5 || 'Domain not valid'
                    }
                ],

                item: {
                    domainName: 'domainName',
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
