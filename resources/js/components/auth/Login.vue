<template>
    <VCard dark max-width="800" class="auth-form m-auto">

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
                </VCol>
                <VCol>
                    <h1>Login</h1>
                    <h3 class="logo">Sunlight Contest Access Platform</h3>
                    <p>software platform for service management in the development process</p>
                </VCol>
            </VRow>

            <VRow>
                <VCol cols="12" md="4">
                    <VTextField
                        required
                        type="password"
                        autocomplete="username"
                        v-model="password"
                        :rules="passwordRules"
                        :counter="24"
                        label="Password"></VTextField>
                </VCol>
                <VCol>
                </VCol>
            </VRow>

            <VRow>
                <VCol class="text-right">
                    <VCheckbox v-model="rememberMe" label="Remember Me"></VCheckbox>
                </VCol>
            </VRow>

            <VRow>
                <VCol alignSelf="end" class="text-right">
                    <VBtn v-on:click="send">Login</VBtn> {{error}}
                </VCol>
                <VCol>
                    <VBtn text>Forgot Your Password?</VBtn>

                    <a href="/register" >
                        <VBtn text>register</VBtn>
                    </a>
                </VCol>
            </VRow>

        </VForm>
    </VCard>
</template>
<style>

</style>
<script>
    import { requestPost } from '../../utils/request';

    export default {

        name: 'login-component',

        props: ['csrf'],

        data () {return {
            error: '',
            valid: false,
            password: '',
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
        }},

        methods: {
            send () {
                const data = {
                    email: this.email,
                    password: this.password,
                    rememberMe: this.rememberMe,
                    _token: this.csrfToken,
                };

                if (this.valid) {
/*                    requestPost('/login', data).then(response => {
                        if (response.ok)
                            location.href = '/home';
                        else
                            this.error = `Server error: [Code${response.status}] ${response.statusText}`;

                    }).catch(error => {
                        console.log('ERROR:',error);
                    });*/
                }
            },
        },

        computed: {},

        mounted() {
            console.log('Component mounted.');
        },

        components: {},
    }
</script>
