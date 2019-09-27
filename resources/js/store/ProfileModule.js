export default {

    namespaced: true,

    state: {
        user: {
/*
            name: JSON.parse(localStorage.getItem('name')) || '',
            email: JSON.parse(localStorage.getItem('email')) || '',
            real_name: JSON.parse(localStorage.getItem('real_name')) || '',
            company: JSON.parse(localStorage.getItem('company')) || '',
            company_spec: JSON.parse(localStorage.getItem('company_spec')) || '',
            requisites: JSON.parse(localStorage.getItem('requisites')) || '',
            address: JSON.parse(localStorage.getItem('address')) || '',
            phone: JSON.parse(localStorage.getItem('phone')) || '',
            currency: JSON.parse(localStorage.getItem('currency')) || '',
            avatar: ''
*/

            name: 'OlegX',
            email: 'Oleg@yahoo.com',
            real_name: 'Oleg Real',
            company: 'Oleg Company',
            company_spec: 'IT',
            requisites: '333',
            address: '',
            phone: '+43 4333 444',
            currency: 'UAH',
            avatar: false
        },
        token: '',
    },

    getters: {
        getUser(state) {
            return {...state.user}
        }
    },

    mutations: {
        updateUser(state, payload) {
            state.user = {...state.user, ...payload}
            // localStorage.setItem('name', JSON.stringify(data.name))
            // localStorage.setItem('email', JSON.stringify(data.email))
            // localStorage.setItem('real_name', JSON.stringify(data.real_name))
            // localStorage.setItem('company', JSON.stringify(data.company))
            // localStorage.setItem('company_spec', JSON.stringify(data.company_spec))
            // localStorage.setItem('requisites', JSON.stringify(data.requisites))
            // localStorage.setItem('address', JSON.stringify(data.address))
            // localStorage.setItem('phone', JSON.stringify(data.phone))
            // localStorage.setItem('currency', JSON.stringify(data.currency))

        }
    },
    actions: {

    }
};
