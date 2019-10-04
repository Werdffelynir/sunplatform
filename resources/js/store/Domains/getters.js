
export const GET_DOMAINS_INFO = 'GET_DOMAINS_INFO';
export const GET_DOMAINS_LIST = 'GET_DOMAINS_LIST';
export const GET_DOMAIN_CURRENT = 'GET_DOMAIN_CURRENT';

export default {

    [GET_DOMAINS_INFO] (state) {
        return state.info
    },

    [GET_DOMAINS_LIST] (state) {
        return state.list
    },

    [GET_DOMAIN_CURRENT] (state) {
        return state.current
    },
}
