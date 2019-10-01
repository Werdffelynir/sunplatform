<template>
    <VCard v-if="show" dark max-width="800" class="auth-form m-auto">

        <div class="auth-menu">
            <a href="/login" >Login</a> |
            <a href="/register" >Register</a>
        </div>
        <VForm v-model="valid" class="pa-10">
            <VRow>
                <VCol cols="12" md="4">
                    <VTextField
                        required
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail Address"></VTextField>
                    <VTextField
                        required
                        type="password"
                        autocomplete="username"
                        v-model="password"
                        :rules="passwordRules"
                        :counter="24"
                        label="Password"></VTextField>
                    <VCheckbox v-model="rememberMe" label="Remember Me"></VCheckbox>
                </VCol>
                <VCol>
                    <h1>Login</h1>
                    <h3 class="logo">Sunlight Contest Access Platform</h3>
                    <p>software platform for service management in the development process</p>
                </VCol>
            </VRow>

            <VRow>
                <VCol alignSelf="end" class="text-right">
                    <VBtn v-on:click="send">Login</VBtn>
                </VCol>
                <VCol>
                    <VBtn text>Forgot Your Password?</VBtn>

                    <a href="/register" >
                        <VBtn text>register</VBtn>
                    </a>
                </VCol>
            </VRow>
        </VForm>
        <Notification :error='true' :message="message"></Notification>
    </VCard>
</template>
<style>

</style>
<script>

    import { requestPost } from '../../utils/request';
    import Notification from "../common/Notification";

    export default {

        name: 'login-component',

        props: ['csrf'],

        data () {
            return {
                message: null,
                show: true,
                valid: false,
                password: 'admin@admin.com',
                rememberMe: true,
                passwordRules: [
                   v => !!v || 'Password is required',
                   v => v.length <= 24 || 'Password must be less than 24 characters',
                ],
                email: 'admin@admin.com',
                emailRules: [
                   v => !!v || 'E-mail is required',
                   v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                snackbar: false,
                errorMessages: null,
                successMessages: null,
            }
        },

        methods: {
            send () {
                const data = {
                    email: this.email,
                    password: this.password,
                    remember_me: this.rememberMe,
                };

                if (this.valid && !this.snackbar) {
                    requestPost('/api/login', data)
                        .then(response => {
                            this.mutationsAddCredentials(response);

                            if (response && this.gettersIsAuthorizedUser()) {
                                this.show = false;
                                this.snackbar = true;
                                this.message = 'Gracia Login is success. Welcome to system.';

                                setTimeout(()=>
                                    this.$router.push('/'),3000);
                            }
                            // console.log('profile/isAuthorizedUser:', this.gettersIsAuthorizedUser());
                        })
                        .catch(error => {
                            this.snackbar = true;
                            this.errorMessages = 'Something wrong, please try later'
                        });
                } else {
                    if (this.email.length === 0){
                        this.snackbar = true;
                        this.errorMessages = 'Email is required';
                    }
                    if (this.password.length === 0){
                        this.snackbar = true;
                        this.errorMessages = 'Password is required';
                    }
                }
            },

            // getters
            gettersIsAuthorizedUser() {return this.$store.getters['profile/isAuthorizedUser']},

            // mutations
            mutationsAddCredentials(payload) {this.$store.commit('profile/addCredentials', payload)},
        },

        mounted() {},

        watch: {},

        computed: {},

        components: {
            Notification
        },
    }
</script>
