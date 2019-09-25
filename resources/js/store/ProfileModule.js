export default {

    namespaced: true,

    state: {
        user: {
            name: '',
            email: '',
            create_at: ''
        }
    },

    getters: {
        user(state) {
            return {
                ...state.user
            };
        },
    },
    mutations: {
        adduser(state, payload) {
            state.user = {...state.user, ...payload};
        }
    },
    actions: {

    },
};
