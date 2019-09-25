<template>
    <VCard dark>
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

            <VRow>
                <VCol cols="12" md="4">
                    <VTextField
                        required
                        type="password"
                        autocomplete="username"
                        v-model="password"
                        :rules="passwordRules"
                        :counter="20"
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
                    <VBtn v-on:click="send">Login</VBtn>
                </VCol>
                <VCol>
                    <VBtn text>Forgot Your Password?</VBtn>
                </VCol>
            </VRow>

        </VForm>
    </VCard>
</template>
<style>

</style>
<script>
    import { postData } from '../../utils/request';

    export default {

        name: 'login-component',

        props: ['csrf-token'],

        data () {return {
            valid: false,
            password: '',
            rememberMe: true,
            passwordRules: [
               v => !!v || 'Password is required',
               v => v.length <= 20 || 'Password must be less than 10 characters',
            ],
            email: 'admin@admin.com',
            emailRules: [
               v => !!v || 'E-mail is required',
               v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
        }},

        methods: {
            send () {
                if (this.valid) {
                    postData('/login', {
                        email: this.email,
                        password: this.password,
                        rememberMe: this.rememberMe,
                        _token: this.csrfToken,
                    }).then(data => {
                        location.href = '/home';
                    }).catch(error => {
                        console.log('ERROR:',error);
                    });
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
