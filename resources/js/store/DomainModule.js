
const SERVICES_LIST =  [
    {name: 'MySQL Database', active: true},
    {name: 'Sqlite Database', active: false},
    {name: 'Online chat', active: true}
];
const DOMAIN_LIST = [
    {id: 1, create_at: '21.04.2019', domain: 'Domain 1', active: true, services: SERVICES_LIST},
    {id: 1, create_at: '21.04.2019', domain: 'Domain 2', active: true, services: SERVICES_LIST},
    {id: 1, create_at: '21.04.2019', domain: 'Domain 3', active: true, services: SERVICES_LIST},
];

export default {
    state: {
        domainName: '',
        list: DOMAIN_LIST
    },
    getters: {
        domains: state => {
            return state.list;
        }
    },
    mutations: {
        changeName(state, name) { state.domainName = name }
    },
    actions: {

    },
};
