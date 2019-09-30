<template>
    <VCard dark>
        <VCardText>
            <VRow>
                <VCol cols="6">
                    <VForm v-model="valid">

                        <VRow>
                            <VCol cols="1" md="1" align-self="center" class="text-right">
                                <VIcon>mdi-information</VIcon>
                            </VCol>
                            <VCol cols="11">
                                <h1>Register new Domain name</h1>
                                <br>
                                <p>Sunlight Contest Access Platform software platform for service
                                    management in the development process. Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit. Accusamus amet blanditiis
                                    doloribus enim iste laborum necessitatibus obcaecati pariatur
                                    perferendis praesentium quod ratione ullam, voluptates.
                                    Suscipit?</p>
                            </VCol>
                        </VRow>

                        <VRow align="stretch">
                            <VCol cols="1" md="1" align-self="center" class="text-right">
                                <VIcon>mdi-flash</VIcon>
                            </VCol>
                            <VCol cols="11" md="4">
                                <VSwitch
                                    v-model="active"
                                    :label="`${active ? 'Activated' : 'Deactivated'}`"
                                    hide-detail
                                ></VSwitch>
                            </VCol>
                        </VRow>

                        <VRow align="stretch">
                            <VCol cols="1" md="1" align-self="center" class="text-right">
                                <VIcon>mdi-domain</VIcon>
                            </VCol>
                            <VCol cols="11" md="6">
                                <VTextField
                                    required
                                    v-model="address"
                                    :rules="addressRules"
                                    :counter="24"
                                    label="Domain name (or IP address)"></VTextField>
                            </VCol>
                        </VRow>
                        <VBtn v-on:click="register">Register</VBtn>
                    </VForm>
                </VCol>
                <VCol cols="6">

                    <VRow>
                        <VCol cols="1" md="1" align-self="center" class="text-right">

                        </VCol>
                        <VCol cols="11">
                            <h1>Domain services</h1>
                            <br>

                            <ul>
                                <li>Service item 1</li>
                                <li>Service item 2</li>
                                <li>Service item 3</li>
                                <li>Service item 4</li>
                                <li>Service item 5</li>
                                <li>Service item 6</li>
                                <li>Service item 7</li>
                                <li>Service item 8</li>
                                <li>Service item 9</li>
                                <li>Service item 10</li>
                            </ul>

                        </VCol>
                    </VRow>

                </VCol>
            </VRow>

        </VCardText>
    </VCard>
</template>
<script>

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
                active: true,
                address: 'your-domain.com',
                addressRules: [
                    function (v){
                        return /\w+\.\w{2,}/.test(v) && v.length > 5 || 'Domain not valid'
                    }
                ],
            };
        },
        methods: {
            register() {
                const data = {
                    address: this.address,
                    active: this.active,
                };

                if (this.valid) {
                    this.$requester.post('/api/domains/register', data).then((response) => {
                        console.log('response:', data, response);
                    });
                }
            },

        }
    }
</script>
