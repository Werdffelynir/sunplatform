
const SERVICES_LIST =  [
    {id: 1, name: 'MySQL Database', active: true},
    {id: 2, name: 'Sqlite Database', active: false},
    {id: 3, name: 'Online chat', active: true}
];
const DOMAIN_LIST = [
    {id: 1, create_at: '21.04.2019', active_to: '15.05.2021', domain: 'Domain 1', active: true, services: SERVICES_LIST},
    {id: 2, create_at: '21.04.2019', active_to: '15.05.2021', domain: 'Domain 2', active: true, services: SERVICES_LIST},
    {id: 3, create_at: '21.04.2019', active_to: '15.05.2021', domain: 'Domain 3', active: true, services: SERVICES_LIST},
];

export default {
    namespaced: true,
    state: {
        domainName: '',
        list: DOMAIN_LIST,
        index: 0
    },
    getters: {
        getlist: state => {
            return state.list;
        },
        getIndex: state => {
            return state.index;
        }
    },
    mutations: {
        changeName(state, name) { state.domainName = name },
        setIndex(state, id) { state.index = id }
    },
    actions: {

    },
};
