<template>
    <div>
        <service-toolbar-component title="Profile Settings">
            <VBtn v-on:click="saveProfileData">Save</VBtn>
        </service-toolbar-component>

        <VCard>
            <VCardTitle></VCardTitle>
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
                                            :counter="28"></VTextField>
                            </div>
                            <div class="d-flex">
                                <VIcon class="pr-2">mdi-phone</VIcon>
                                <VTextField label="Phone"
                                            v-model="user.phone"
                                            :rules="userForm.phoneRules" class="mb-2"></VTextField>
                            </div>
                        </Vcol>
                    </VRow>
                    <VRow>
                        <VCol cols="6">
                            <div class="d-flex">
                                <VIcon class="pr-2">mdi-account-outline</VIcon>
                                <VTextField label="Nickname"
                                            v-model="user.name"
                                            :rules="userForm.requiredRules"
                                            :counter="24" required></VTextField>
                            </div>
                            <div class="d-flex">
                                <VIcon class="pr-2">mdi-account-outline</VIcon>
                                <VTextField label="Real Name"
                                            v-model="user.real_name"></VTextField>
                            </div>
                            <div class="d-flex">
                                <VIcon class="pr-2">mdi-briefcase-outline</VIcon>
                                <VTextField label="Company"
                                            v-model="user.company"></VTextField>
                            </div>
                            <div class="d-flex">
                                <VIcon class="pr-2">mdi-briefcase-outline</VIcon>
                                <VTextField label="Company Specialization"
                                            v-model="user.company_spec"></VTextField>
                            </div>
                            <div class="d-flex">
                                <VIcon class="pr-2">mdi-file-document-box-outline</VIcon>
                                <VTextField label="Requisites"
                                            v-model="user.requisites"></VTextField>
                            </div>
                            <div class="d-flex">
                                <VIcon class="pr-2">mdi-currency-usd</VIcon>
                                <VTextField label="Currency"
                                            v-model="user.currency"></VTextField>
                            </div>
                        </VCol>
                    </VRow>
                    <VRow>
                        <VCol class="text-right">
                            <VBtn v-on:click="saveProfileData">Save</VBtn>
                        </VCol>
                    </VRow>
                </VContainer>
            </VForm>
        </VCard>
    </div>
</template>
<script>

    import Avatar from "../common/Avatar";
    import {getterWithModule} from '../../store/getterWith';
    import {GET_USER} from '../../store/Profile/getters';
    import ServiceToolbarComponent from '../common/ServiceToolbar';
    import {saveUser} from '../../services/profile.service';


    export default {
        name: 'profile-component',

        data() {
            return {
                userForm: {
                    valid: false,
                    requiredRules: [
                        v => !!v || 'Field is required',
                    ],
                    phoneRules: [
                        v => !!v || 'Phone is required',
                        v => /[\+?\d+\-]+/.test(v) || 'Number must be valid',
                    ],
                    emailRules: [
                        v => !!v || 'E-mail is required',
                        v => /.+@.+/.test(v) || 'E-mail must be valid',
                    ],
                },
            };
        },
        mounted() { },
        methods: {
            saveProfileData() {
                if (this.userForm.valid) {
                    saveUser(this.user)
                }
            },
        },
        computed: {
            user() {
                return {...getterWithModule('profile', GET_USER)};
            },
        },
        components: {
            'avatar-component': Avatar,
            'service-toolbar-component': ServiceToolbarComponent,
        }
    }
</script>
