<template>
        <VCard dark>
            <VCardText>
                <VForm v-model="valid">

                    <VRow >
                        <VCol cols="1" md="1" align-self="center" class="text-right">
                            <VIcon>mdi-information</VIcon>
                        </VCol>
                        <VCol cols="11" md="6">
                            <h1>Register new Domain name</h1>
                            <br>
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
                                v-model="domainAddress"
                                :rules="domainAddressRules"
                                :counter="24"
                                label="Domain name (or IP address)"></VTextField>
                        </VCol>
                    </VRow>
                    <VBtn v-on:click="register">Register</VBtn>
                </VForm>
            </VCardText>
        </VCard>
</template>
<script>

    import { csrfToken, postData } from '../../utils/request';

    export default {

        name: 'domains-register-component',

        mounted() {
            console.log('Component mounted.')
        },

        computed: {
          show() {
              return '';
          }
        },

        data() {
            return {
                valid: '',
                domainAddress: 'domain.com',
                domainAddressRules: [
                    function (v){
                        return /\w+\.\w{2,}/.test(v) && v.length > 5 || 'Domain not valid'
                    }
                ],
            };
        },
        methods: {
            register() {
                const data = {
                    address: this.domainAddress,
                    _token: csrfToken(),
                };

                if (this.valid) {
                    postData('/api/domains/register', data).then((response) => {
                        console.log('response:',data,response);
                    }).then((error) => {
                        console.log('error:',error);
                    })
                }
            },

        }
    }
</script>
