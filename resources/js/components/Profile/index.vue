<template>
    <VCard>
        <VCardTitle>Profile Settings</VCardTitle>
        <VForm v-model="userForm.valid">
            <VContainer>
                <VRow>
                    <VCol cols="6" class="text-center">
                        <avatar-component uploader="on"/>
                    </Vcol>
                    <VCol cols="6">
                        <div class="d-flex">
                            <VIcon class="pr-2">mdi-email-open-outline</VIcon>
                            <VTextField label="E-Mail"
                                        v-model="user.email"
                                        :rules="userForm.emailRules"
                                        :counter="28" required></VTextField>
                        </div>
                        <div class="d-flex">
                            <VIcon class="pr-2">mdi-home-outline</VIcon>
                            <VTextField label="Address"
                                        v-model="user.address"
                                        :counter="28" required></VTextField>
                        </div>
                        <div class="d-flex">
                            <VIcon class="pr-2">mdi-phone</VIcon>
                            <VTextField label="Phone"
                                        v-model="user.phone"
                                        :rules="userForm.phoneRules" required class="mb-2"></VTextField>
                        </div>
                        <VBtn v-on:click="saveProfileData">Save</VBtn>
                    </Vcol>
                </VRow>
                <VRow>
                    <VCol cols="6">
                        <div class="d-flex">
                            <VIcon class="pr-2">mdi-account-outline</VIcon>
                            <VTextField label="Nickname"
                                        v-model="user.name"
                                        :rules="userForm.nameRules"
                                        :counter="24" required></VTextField>
                        </div>
                        <div class="d-flex">
                            <VIcon class="pr-2">mdi-account-outline</VIcon>
                            <VTextField label="Real Name"
                                        v-model="user.real_name"
                                        :counter="36" required></VTextField>
                        </div>
                        <div class="d-flex">
                            <VIcon class="pr-2">mdi-briefcase-outline</VIcon>
                            <VTextField label="Company"
                                        v-model="user.company" :counter="24" required></VTextField>
                        </div>
                        <div class="d-flex">
                            <VIcon class="pr-2">mdi-briefcase-outline</VIcon>
                            <VTextField label="Company Specialization"
                                        v-model="user.company_spec"
                                        :counter="36" required></VTextField>
                        </div>
                        <div class="d-flex">
                            <VIcon class="pr-2">mdi-file-document-box-outline</VIcon>
                            <VTextField label="Requisites"
                                        v-model="user.requisites" required></VTextField>
                        </div>
                        <div class="d-flex">
                            <VIcon class="pr-2">mdi-currency-usd</VIcon>
                            <VTextField label="Currency"
                                        v-model="user.currency"
                                        :counter="20" required></VTextField>
                        </div>
                    </VCol>
                </VRow>
            </VContainer>
        </VForm>
    </VCard>
</template>
<script>

    import Avatar from "../common/Avatar";
    import {SET_USER} from '../../store/Profile/mutations';
    import {getterWithModule} from '../../store/getterWith';
    import {GET_USER} from '../../store/Profile/getters';
    import {commitWithModule} from '../../store/commitWith';

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
                        v => v.length >= 24 || 'Name must be more than 10 characters',
                    ],
                    emailRules: [
                        v => !!v || 'E-mail is required',
                        v => /.+@.+/.test(v) || 'E-mail must be valid',
                    ],
                },
            };
        },
        mounted() {},
        methods: {
            saveProfileData() {
                if (this.userForm.valid) {
                    commitWithModule('profile', SET_USER, this.user);
                }
            },
            onChange (image) {
                if (image) {
                    this.image = image;
                } else {
                    console.log('Some wrong');
                }
            }
        },
        computed: {
            user() {
                return getterWithModule('profile', GET_USER);
            },
        },
        components: {
            'avatar-component': Avatar,
        }
}
</script>
