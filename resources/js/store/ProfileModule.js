
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
            create_at: ''
        },
        // isAuthorizedUser: false,
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
        isAuthorizedUser(state) {
            let credentials;
            try {
                credentials = JSON.parse(localStorage.getItem('credentials'));
                if (credentials)
                    this.commit('profile/addCredentials', credentials)
            } catch (e) {}
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
            localStorage.setItem('credentials', JSON.stringify(credentials));
            state.isAuthorizedUser = true;
            state.credentials = credentials;
        },
        removeCredentials(state, payload) {
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
