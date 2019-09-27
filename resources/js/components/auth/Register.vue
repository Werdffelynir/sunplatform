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
                        autocomplete=""
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
                        autocomplete=""
                        v-model="passwordConfirm"
                        :rules="passwordConfirmRules"
                        :counter="16"
                        label="Confirm Password"></VTextField>
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
<style>
    .auth-form{
        margin: 0 auto;
    }
</style>
<script>

    import { requestPost } from '../../utils/request';

    export default {
        name: 'register-component',

        props: ['csrf'],

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
                    (v) => v === this.password || 'Confirm Password must be equal with Password',
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
                error: '',
            }
        },

        methods: {
            send: function (vueAppContainer) {
                const data = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    // password_confirmation: this.passwordConfirm,
                    // _token: this.csrfToken,
                };

                const headers = {'X-CSRF-TOKEN': this.csrf};

                requestPost('/api/register', data)
                    .then(response => {
                        console.log('response:', response);
                    })
                    .catch(error => {
                        console.log('ERROR:', error);
                    });


                // console.log(data);

                if (this.valid) {
                    // , {'X-CSRF-TOKEN': this.csrfToken}
/*
                    postData('/register', data).then(response => {
                        console.log('response', response);
                        if (response.ok) {
                            // location.href = '/login';
                        } else {
                            this.error = `Server error: [Code${response.status}] ${response.statusText}`;
                        }
                    }).catch(error => {
                        console.log('ERROR:',error);
                    });
*/

                }
            },
        },
        computed: {

        },
        mounted() {
            console.log('Component mounted.');
        }
    }
</script>
