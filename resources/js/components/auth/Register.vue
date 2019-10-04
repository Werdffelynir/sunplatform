<template>
    <VCard dark max-width="800" class="auth-form m-auto">
        <div class="auth-menu">
            <a href="/login" >Login</a> |
            <a href="/register" >Register</a>
        </div>

        <VForm v-model="valid" class="pa-10">

            <VRow>
                <VCol cols="12" md="6">
                    <VTextField
                        required
                        v-model="name"
                        :rules="nameRules"
                        :counter="16"
                        label="Full name"></VTextField>
                </VCol>
                <VCol>
                    <VTextField
                        required
                        type="password"
                        autocomplete=""
                        v-model="password"
                        :rules="passwordRules"
                        :counter="16"
                        label="Password"></VTextField>

                </VCol>
            </VRow>

            <VRow>
                <VCol cols="12" md="6">
                    <VTextField
                        required
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail Address"></VTextField>
                </VCol>
                <VCol>
                    <VTextField
                        required
                        type="password"
                        autocomplete=""
                        v-model="passwordConfirm"
                        :rules="passwordConfirmRules"
                        :counter="16"
                        label="Confirm Password"></VTextField>

                </VCol>
            </VRow>

            <VRow>
                <VCol alignSelf="end" class="text-right" >
                    <h1>Register</h1>
                    <h3 class="logo">Sunlight Contest Access Platform</h3>
                    <p>software platform for service management in the development process</p>
                </VCol>
                <VCol alignSelf="end" class="text-right" >
                    <VBtn v-on:click="send">Register</VBtn>
                </VCol>
            </VRow>
        </VForm>

        <VSnackbar top v-model="snackbar" >
            <h2>{{ successMessages }}</h2>
            <h2 class="red--text">{{ errorMessages }}</h2>
            <VBtn color="pink" text @click="snackbar = errorMessages = successMessages = false">Close</VBtn>
        </VSnackbar>

    </VCard>
</template>
<style>
    .auth-form{
        margin: 0 auto;
    }
</style>
<script>

    import { requestPost } from '../../util/request';
    import StringGenerate from '../../util/StringGenerate';


    const strGenName = (new StringGenerate()).syllables(8);
    const randomStr = {
        name: strGenName,
        email: strGenName + '@mail.com',
        password: 'password',
    };

    export default {
        name: 'register-component',

        props: ['csrf'],

        data () {
            return {
                valid: false,
                name: randomStr.name,
                nameRules: [
                    v => !!v || 'Name is required',
                    v => v.length <= 16 || 'Name must be less than 10 characters',
                ],
                email: randomStr.email,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                password: 'password',
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => /\w+/.test(v) && v.length <= 16 || 'Password must be less than 10 characters',
                ],
                passwordConfirm: 'password',
                passwordConfirmRules: [
                    v => !!v || 'Confirm Password is required',
                    (v) => v === this.password || 'Confirm Password must be equal with Password',
                ],
                snackbar: false,
                errorMessages: null,
                successMessages: null,
            }
        },

        methods: {
            send: function (vueAppContainer) {
                const data = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                };

                if (this.valid && !this.snackbar) {
                    requestPost('/api/register', data)
                        .then(response => {
                            if (response.message) {
                                this.snackbar = true;
                                this.successMessages = response.message;
                                this.errorMessages = response.errors;

                                setTimeout(()=>
                                    this.$router.push('/login'),3000);
                            }
                        })
                        .catch(error => {
                            this.snackbar = true;
                            this.errorMessages = 'Something wrong, please try later'
                        });
                } else {

                }
            },
        },

        computed: {},

        mounted() {},

        components: {},
    }
</script>
