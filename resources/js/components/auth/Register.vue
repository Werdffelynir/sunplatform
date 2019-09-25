<template>
    <VCard dark>

        <h2>Register</h2>

        <VForm v-model="valid" class="pa-10">
            <VRow>
                <VCol cols="12" md="4">
                    <VTextField
                        required
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail Address"></VTextField>
                </VCol>
                <VCol>
                    <h1 class="logo">Sunlight Contest Access Platform</h1>
                    <p>software platform for service management in the development process</p>
                </VCol>
            </VRow>

<!--                    <VCol cols="12" md="4">
                        <VTextField
                            v-model="name"
                            :rules="nameRules"
                            :counter="10"
                            label="First name"
                            required
                        ></VTextField>
                    </VCol>

                    <VCol cols="12" md="4">
                        <VTextField
                            v-model="password"
                            :rules="nameRules"
                            :counter="10"
                            label="Last name"
                            required
                        ></VTextField>
                    </VCol>

                    <VCol cols="12" md="4">
                        <VTextField
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                        ></VTextField>
                    </VCol>
                    <VCheckbox></VCheckbox>
                </VRow>
            </VContainer>-->
        </VForm>
    </VCard>
</template>
<style>
    .domains {
        width: 100%;
        padding: 0 2rem 0 1rem;
    }
</style>
<script>

    export default {
        name: 'register-component',

        components: {

        },

        data () {
            return {
                valid: false,
                password: '',
                name: '',
                nameRules: [
                    v => !!v || 'Name is required',
                    v => v.length <= 10 || 'Name must be less than 10 characters',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
            }
        },

        methods: {
            navigateTo: function (nav, name) {
            }
        },
        computed: {

        },
        mounted() {
            console.log('Component mounted.');
        }
    }
</script>
