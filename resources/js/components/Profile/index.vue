<template>
    <VCard>
        <VCardTitle>Profile Settings</VCardTitle>
    <VForm v-model="valid">
        <VContainer>
            <VRow>
                <VCol cols="6" class="text-center">
                <VAvatar
                    class="profile"
                    color="grey"
                    size="164"
                >
                    <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                </VAvatar>
                </Vcol>
                <VCol cols="6">
                    <VTextField
                        v-model="email"
                        :rules="nameRules"
                        :counter="10"
                        label="E-Mail"
                        required
                    ></VTextField>
                    <VTextField
                        v-model="address"
                        :rules="nameRules"
                        :counter="10"
                        label="Address"
                        required
                    ></VTextField>
                    <VTextField
                        v-model="phone"
                        :rules="nameRules"
                        :counter="10"
                        label="Phone"
                        required
                    ></VTextField>
                    <VBtn v-on:click="saveProfileData">Save</VBtn>
                </Vcol>
            </VRow>
            <VRow>
                <VCol
                    cols="6"
                >
                    <VTextField
                        v-model="name"
                        :rules="nameRules"
                        :counter="10"
                        label="Nickname"
                        required
                    ></VTextField>
                    <VTextField
                        v-model="real_name"
                        :rules="nameRules"
                        :counter="10"
                        label="Real name"
                        required
                    ></VTextField>
                    <VTextField
                        v-model="company"
                        :rules="nameRules"
                        :counter="10"
                        label="Company"
                        required
                    ></VTextField>
                    <VTextField
                        v-model="company_spec"
                        :rules="nameRules"
                        :counter="10"
                        label="Company_spec"
                        required
                    ></VTextField>
                    <VTextField
                        v-model="requisites"
                        :rules="nameRules"
                        :counter="10"
                        label="Requisites"
                        required
                    ></VTextField>
                    <VTextField
                        v-model="currency"
                        :rules="nameRules"
                        :counter="10"
                        label="Currency"
                        required
                    ></VTextField>
                </VCol>
            </VRow>
        </VContainer>
    </VForm>
    </VCard>
</template>
<script>

    import avatar from './../../../assets/images/avatar.png';
    import { mapMutations } from 'vuex';

    export default {
        name: 'profile-component',

        data() {
            console.log(this);
            return {
                valid: false,
                name: '',
                email: '',
                real_name: '',
                company: '',
                company_spec: '',
                requisites: '',
                address: '',
                phone: '',
                currency: '',
                avatar: '',
                nameRules: [function (_name) {
                    return _name.length > 4 || "NOOOO"
                }],
            };
        },
        mounted() {
            let profiledata = this.$store.getters['profile/getUser'];

            this.name = profiledata.name;
            this.email = profiledata.email;
            this.real_name = profiledata.real_name;
            this.company = profiledata.company;
            this.company_spec = profiledata.company_spec;
            this.requisites = profiledata.requisites;
            this.address = profiledata.address;
            this.phone = profiledata.phone;
            this.currency = profiledata.currency;
            this.avatar = profiledata.avatar;
        },
        methods: {
            ...mapMutations('profile', ['updateUser']),
            saveProfileData() {
                this.updateUser(this, this.name)
            }

        },
        computed: {

    }
}
</script>
