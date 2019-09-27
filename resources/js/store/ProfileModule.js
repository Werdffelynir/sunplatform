export default {

    namespaced: true,

    state: {
        user: {
            name: '',
            email: '',
            create_at: ''
        },
        auth: true,
        token: '',
    },

    getters: {
        user(state) {
            return { ...state.user } },
        token(state) {
            return state.token },
        auth(state) {
            return state.auth },
    },
    mutations: {
        adduser(state, payload) {
            state.user = {...state.user, ...payload};
        },
        addtoken(state, payload) {
            state.token = payload;
        }
    },
    actions: {

    },
};
