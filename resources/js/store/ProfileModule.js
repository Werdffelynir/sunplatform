export default {

    namespaced: true,

    state: {
        user: {
            name: '',
            email: '',
            real_name: '',
            company: '',
            company_spec: '',
            requisites: '',
            address: '',
            phone: '',
            currency: '',
            avatar: ''
            // name: 'OlegX',
            // email: 'Oleg@yahoo.com',
            // real_name: 'Oleg Real',
            // company: 'Oleg Company',
            // company_spec: 'IT',
            // requisites: '333',
            // address: 'oleg street 44',
            // phone: '+43 4333 444',
            // currency: 'UAH',
            // avatar: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg'
        },
        token: '',
    },

    getters: {
        getUser(state) {
            return {...state.user}
        }
    },

    mutations: {
        updateUser(state, data) {
            state.user.name = {...state.user, data}


        }
    },
    actions: {

    }
};
