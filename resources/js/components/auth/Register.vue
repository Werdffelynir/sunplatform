<template>
    <VCard dark>

        <div class="auth-menu">
            <a href="/login" >Login</a> |
            <a href="/register" >Register</a>
        </div>

        <VForm v-model="valid" class="pa-10">

            <VRow>
                <VCol cols="12" md="4">
                    <VTextField
                        required
                        v-model="name"
                        :rules="nameRules"
                        :counter="16"
                        label="Full name"></VTextField>
                </VCol>
                <VCol>
                    <h1>Register</h1>
                    <h3 class="logo">Sunlight Contest Access Platform</h3>
                    <p>software platform for service management in the development process</p>
                </VCol>
            </VRow>

            <VRow>
                <VCol cols="12" md="4">
                    <VTextField
                        required
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail Address"></VTextField>
                </VCol>
                <VCol></VCol>
            </VRow>

            <VRow>
                <VCol cols="12" md="4">
                    <VTextField
                        required
                        type="password"
                        autocomplete="username"
                        v-model="password"
                        :rules="passwordRules"
                        :counter="16"
                        label="Password"></VTextField>
                </VCol>
                <VCol></VCol>
            </VRow>

            <VRow>
                <VCol cols="12" md="4">
                    <VTextField
                        required
                        type="password"
                        autocomplete="username"
                        v-model="passwordConfirm"
                        :rules="passwordRules"
                        :counter="16"
                        label="Password"></VTextField>
                </VCol>
                <VCol></VCol>
            </VRow>

            <VRow>
                <VCol alignSelf="end" class="text-right">
                    <VBtn v-on:click="send">Register</VBtn>
                </VCol>
            </VRow>

        </VForm>
    </VCard>
</template>
<script>

    import { postData } from '../../utils/request';

    export default {
        name: 'register-component',

        props: ['csrf-token'],

        components: {

        },

        data () {
            return {
                valid: false,
                password: '',
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => /\w+/.test(v) && v.length <= 16 || 'Password must be less than 10 characters',
                ],
                passwordConfirm: '',
                passwordConfirmRules: [
                    v => !!v || 'Confirm Password is required',
                    v => v === this.password || 'Confirm Password must be equal with Password',
                ],
                name: '',
                nameRules: [
                    v => !!v || 'Name is required',
                    v => v.length <= 16 || 'Name must be less than 10 characters',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
            }
        },

        methods: {
            send: function (vueAppContainer) {
                const data = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.passwordConfirm,
                    _token: this.csrfToken,
                };
                if (this.valid) {
                    postData('/register', data).then(data => {
                        location.href = '/login';
                    }).catch(error => {
                        console.log('ERROR:',error);
                    });
                }
            }
        },
        computed: {

        },
        mounted() {
            console.log('Component mounted.');
        }
    }
</script>
