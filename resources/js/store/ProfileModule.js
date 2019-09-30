import Vue from 'vue';

const credentialsKeys = {
    expires_at: null,
    token: null,
    token_type: null,
};

export default {

    namespaced: true,

    state: {
        user: {
            name: '',
            email: '',
            create_at: '',
            avatar: '',
        },
        isAuthorizedUser: false,
        credentials: null,
        csrf: '',
    },

    getters: {
        user(state) {
            return { ...state.user } },
        csrf(state) {
            return state.csrf },
        credentials(state) {
            return { ...state.credentials } },
        //todo: rm
        isAuthorizedUser(state) {
            let credentials;
            return !!state.credentials || credentials},
    },
    mutations: {
        addUser(state, payload) {
            state.user = {...state.user, ...payload};
        },

        addCredentials(state, payload) {
            const credentials = {};
            const keys = Object.keys(credentialsKeys);
            for (let i = 0; i < keys.length; i++) {
                if (payload[keys[i]])
                    credentials[keys[i]] = payload[keys[i]];
                else
                    return false;
            }

            Vue.requesterCredentials(credentials);
            localStorage.setItem('credentials', JSON.stringify(credentials));

            //todo: rm
            state.isAuthorizedUser = true;
            state.credentials = credentials;
        },


        removeCredentials(state, payload) {

            //todo: rm
            state.isAuthorizedUser = false;
            state.credentials = null;
        },
        addCsrf(state, payload) {
            state.csrf = payload;
        },
    },
    actions: {

    },
};
