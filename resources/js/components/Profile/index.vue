<template>
    <VCard>
        <VCardTitle>Profile Settings</VCardTitle>
    <VForm v-model="userForm.valid">
        <VContainer>
            <VRow>
                <VCol cols="6" class="text-center">
                    <avatar-component uploader="on" />
                </Vcol>
                <VCol cols="6">
                    <div class="d-flex">
                        <VIcon class="pr-2">mdi-email-open-outline</VIcon>
                    <VTextField
                        v-model="user.email"
                        :rules="userForm.emailRules"
                        :counter="20"
                        label="E-Mail"
                        required
                    ></VTextField>
                    </div>
                    <div class="d-flex">
                        <VIcon class="pr-2">mdi-home-outline</VIcon>
                    <VTextField
                        v-model="user.address"
                        :counter="20"
                        label="Address"
                        required
                    ></VTextField>
                    </div>
                    <div class="d-flex">
                        <VIcon class="pr-2">mdi-phone</VIcon>
                    <VTextField
                        v-model="user.phone"
                        :rules="userForm.phoneRules"
                        :counter="20"
                        label="Phone"
                        required
                        class="mb-2"
                    ></VTextField>
                    </div>
                    <VBtn v-on:click="saveProfileData">Save</VBtn>
                </Vcol>
            </VRow>
            <VRow>
                <VCol cols="6">
                    <div class="d-flex">
                    <VIcon class="pr-2">mdi-account-outline</VIcon>
                    <VTextField
                        v-model="user.name"
                        :rules="userForm.nameRules"
                        :counter="20"
                        label="Nickname"
                        required
                    ></VTextField>
                    </div>
                    <div class="d-flex">
                    <VIcon class="pr-2">mdi-account-outline</VIcon>
                    <VTextField
                        v-model="user.real_name"
                        :counter="20"
                        label="Real Name"
                        required
                    ></VTextField>
                    </div>
                    <div class="d-flex">
                        <VIcon class="pr-2">mdi-briefcase-outline</VIcon>
                    <VTextField
                        v-model="user.company"
                        :counter="20"
                        label="Company"
                        required
                    ></VTextField>
                    </div>
                    <div class="d-flex">
                        <VIcon class="pr-2">mdi-briefcase-outline</VIcon>
                    <VTextField
                        v-model="user.company_spec"
                        :counter="20"
                        label="Company Specialization"
                        required
                    ></VTextField>
                    </div>
                    <div class="d-flex">
                        <VIcon class="pr-2">mdi-file-document-box-outline</VIcon>
                    <VTextField
                        v-model="user.requisites"
                        :counter="20"
                        label="Requisites"
                        required
                    ></VTextField>
                    </div>
                    <div class="d-flex">
                        <VIcon class="pr-2">mdi-currency-usd</VIcon>
                    <VTextField
                        v-model="user.currency"
                        :counter="20"
                        label="Currency"
                        required
                    ></VTextField>
                    </div>
                </VCol>
            </VRow>
        </VContainer>
    </VForm>
    </VCard>
</template>
<script>

    import avatar from './../../../assets/images/avatar.png';
    import { mapMutations } from 'vuex';
    import Avatar from "../common/Avatar";

    export default {
        name: 'profile-component',

        data() {
            return {
                userForm: {
                    valid: false,
                    phoneRules: [
                        v => !!v || 'Phone is required',
                        v => /[\+?\d+\-]+/.test(v) || 'Number must be valid',
                    ],
                    nameRules: [
                        v => !!v || 'Field is required',
                        // v => v.length >= 10 || 'Name must be more than 10 characters',
                    ],
                    emailRules: [
                        v => !!v || 'E-mail is required',
                        v => /.+@.+/.test(v) || 'E-mail must be valid',
                    ],
                },
            };
        },
        mounted() {
            // console.log(this.user);
            //
            // let profiledata = this.$store.getters['profile/getUser'];
            //
            // this.name = profiledata.name;
            // this.email = profiledata.email;
            // this.real_name = profiledata.real_name;
            // this.company = profiledata.company;
            // this.company_spec = profiledata.company_spec;
            // this.requisites = profiledata.requisites;
            // this.address = profiledata.address;
            // this.phone = profiledata.phone;
            // this.currency = profiledata.currency;
            // this.avatar = profiledata.avatar;
        },
        methods: {
            ...mapMutations('profile', ['updateUser']),

            saveProfileData() {
                console.log(
                    this.userForm,this.user
                );
                if (this.userForm.valid) {
                    this.updateUser(this.user)
                }
            },
            onChange (image) {
                console.log('New picture selected!')
                if (image) {
                    console.log('Picture loaded.')
                    this.image = image
                } else {
                    console.log('FileReader API not supported: use the <form>, Luke!')
                }
            }

        },
        computed: {
            user() {
                return this.$store.getters['profile/getUser'];
            },
        },
        components: {
            'avatar-component': Avatar,
        }
}
</script>
