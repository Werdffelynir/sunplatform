
const SERVICES_LIST =  [
    {id: 1, name: 'MySQL Database', active: true},
    {id: 2, name: 'Sqlite Database', active: false},
    {id: 3, name: 'Online chat', active: true}
];
const DOMAIN_LIST = [
    {id: 1, create_at: '21.04.2019', active_to: '15.05.2021', domain: 'Domain 1', active: true, services: SERVICES_LIST},
    {id: 2, create_at: '21.04.2019', active_to: '15.05.2021', domain: 'Domain 2', active: false, services: SERVICES_LIST},
    {id: 3, create_at: '21.04.2019', active_to: '15.05.2021', domain: 'Domain 3', active: true, services: SERVICES_LIST},
];

const DOMAIN = {
    id: 0,
    address: '',
    action: 'create',
};

export default {
    item: '',
    info: '',
    list: [],
    current: {},
}
