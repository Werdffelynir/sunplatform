export default {

    namespaced: true,

    state: {
        user: {
            name: '',
            email: '',
            create_at: ''
        },
        token: '',
    },

    getters: {
        user(state) {
            return { ...state.user } },
        token(state) {
            return state.token },
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
